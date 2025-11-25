const mongoose = require('mongoose');
require('dotenv').config();

const Brand = require('./models/Brand'); // if you pull out models; alternatively inline
const Product = require('./models/Product');

// simple inline approach (for copy/paste; or run one-off script)
(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Brand.deleteMany({});
  await Product.deleteMany({});

  const brands = await Brand.insertMany([
    { name: 'Midea' },
    { name: 'Bruhm' },
    { name: 'Panasonic' },
    { name: 'Kenstar' }
  ]);

  await Product.insertMany([
    {
      name: 'Midea 1.5HP AC',
      brand: brands.find(b=>b.name==='Midea')._id,
      price: 145000,
      description: 'Split AC 1.5HP, energy efficient.',
      category: 'Air Conditioner',
      stock: 12,
      images: []
    },
    {
      name: 'Bruhm Double Door Fridge 220L',
      brand: brands.find(b=>b.name==='Bruhm')._id,
      price: 105000,
      description: 'Frost-free fridge with stabilizer-free operation.',
      category: 'Refrigerator',
      stock: 8,
      images: []
    }
  ]);

  console.log('Seeded');
  process.exit(0);
})();
