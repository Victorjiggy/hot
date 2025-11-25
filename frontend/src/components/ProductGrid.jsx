import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, filters, addToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory =
        filters.category === "All" || p.category === filters.category;

      const matchBrand =
        filters.brands.length === 0 || filters.brands.includes(p.brand);

      // Fix: allow products with null price to show
      const matchPrice = p.price === null || p.price <= filters.maxPrice;

      return matchCategory && matchBrand && matchPrice;
    });
  }, [filters, products]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filteredProducts.slice(start, start + itemsPerPage);

  //  DOT PAGINATION LOGIC
  const getPaginationNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // Show all pages if 5 or less
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // Show: 1, 2, 3, ..., last
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }

    // Show: 1, ..., last 3 pages
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    // Middle range: 1 ... X ... Last
    return [1, "...", currentPage, "...", totalPages];
  };

  const paginationNumbers = getPaginationNumbers();

  return (
    <section className="lg:col-span-3" id="products">
      <h2 className="text-4xl font-bold mb-10 text-blue-400 text-center">
        Products
      </h2>

      {/* No results */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          No products found. Adjust your filters.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginated.map((p) => (
          <ProductCard key={p.name} product={p} addToCart={addToCart} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 text-blue-400">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {paginationNumbers.map((item, i) => {
            if (item === "...") {
              return (
                <span key={i} className="px-2">
                  ...
                </span>
              );
            }

            return (
              <button
                key={i}
                onClick={() => setCurrentPage(item)}
                className={`px-3 py-1 border rounded ${
                  currentPage === item ? "bg-blue-400 text-white" : ""
                }`}
              >
                {item}
              </button>
            );
          })}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
