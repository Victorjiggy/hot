import React from "react";

const SidebarFilters = ({ filters, setFilters }) => {
  const categories = [
    "All",
    "Air Conditioners",
    "Refrigerators",
    "Televisions",
    "Gas Cookers",
    "Washing Machines",
    "Freezers",
    "Kitchen Appliances",
  ];

  const brands = ["Midea", "Bruhm", "Panasonic", "Kenstar", "Genstar"];

  // Sub-filters for categories
  const subFilters = {
    "Air Conditioners": ["1 HP", "1.5 HP", "2 HP", "2.5 HP", "3 HP", "3.5 HP"],
    Televisions: ["32\"", "43\"", "50\"", "55\"", "65\"", "75\""],
    Refrigerators: ["100L", "150L", "200L", "250L", "300L"],
    "Gas Cookers": ["1 Burner", "2 Burners", "3 Burners", "4 Burners", "5 Burners", "6 Burners"],
    Freezers: ["100L", "150L", "200L", "250L", "300L", "400L"],
    "Washing Machines": ["5 KG", "7 KG", "10 KG", "12 KG"],
  };

  return (
    <aside className="bg-gradient-to-r from-blue-100 via-blue-200 to-purple-300 md:bg-blue-100 md:bg-none shadow p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <div className="space-y-2 text-sm">
          {categories.map((cat) => (
            <label key={cat} className="block cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={filters.category === cat}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    category: e.target.value,
                    subFilter: "", // reset sub-filter when category changes
                  })
                }
              />{" "}
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Dynamic Sub-Filters */}
      {filters.category !== "All" &&
        subFilters[filters.category] && (
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Options</h3>
            <select
              className="w-full p-2 border rounded"
              value={filters.subFilter}
              onChange={(e) =>
                setFilters({ ...filters, subFilter: e.target.value })
              }
            >
              <option value="">Select Option</option>
              {subFilters[filters.category].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        )}

      {/* Brands */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Brands</h3>
        <div className="space-y-2 text-sm">
          {brands.map((brand) => (
            <label key={brand} className="block cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={(e) => {
                  const newBrands = e.target.checked
                    ? [...filters.brands, brand]
                    : filters.brands.filter((b) => b !== brand);

                  setFilters({ ...filters, brands: newBrands });
                }}
              />{" "}
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <input
          type="range"
          min="150000"
          max="1500000"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: parseInt(e.target.value) })
          }
          className="w-full"
        />
        <p className="text-sm mt-2">
          Max Price: ₦{filters.maxPrice.toLocaleString()}
        </p>
      </div>
    </aside>
  );
};

export default SidebarFilters;
