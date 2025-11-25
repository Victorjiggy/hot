const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Mongo connect error:', err));

// Models
const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: String
});
const Brand = mongoose.model('Brand', BrandSchema);

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  price: Number,
  description: String,
  images: [String],
  category: String,
  stock: Number,
  featured: { type: Boolean, default: false }
});
const Product = mongoose.model('Product', ProductSchema);

// Routes
app.get('/', (req, res) => res.send('JamVaccElectronic API'));

// Brands routes
app.get('/api/brands', async (req, res) => {
  const brands = await Brand.find();
  res.json(brands);
});
app.post('/api/brands', async (req, res) => {
  const b = new Brand(req.body);
  await b.save();
  res.status(201).json(b);
});

// Products routes
app.get('/api/products', async (req, res) => {
  const products = await Product.find().populate('brand');
  res.json(products);
});
app.get('/api/products/:id', async (req, res) => {
  const p = await Product.findById(req.params.id).populate('brand');
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
});
app.post('/api/products', async (req, res) => {
  const p = new Product(req.body);
  await p.save();
  res.status(201).json(p);
});

// Simple product search/filtering (optional)
app.get('/api/search', async (req, res) => {
  const q = req.query.q || '';
  const products = await Product.find({ name: { $regex: q, $options: 'i' } }).populate('brand');
  res.json(products);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
