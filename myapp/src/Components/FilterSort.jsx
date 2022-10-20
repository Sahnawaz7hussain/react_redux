import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.getAll("genre") || []);
  const location = useLocation();
  const [sortBy, setSortBy] = useState("");
  const handleFilterChange = (e) => {
    let option = e.target.value;
    if (option) {
      let newCategory = [...category];
      if (newCategory.includes(option)) {
        //remove from array of cat...,
        newCategory.splice(newCategory.indexOf(option), 1);
      } else {
        newCategory.push(option);
      }
      setCategory(newCategory);
    }
  };
  useEffect(() => {
    if (category || sortBy) {
      const params = {};
      category && (params.genre = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
    console.log("useeffe ruffin");
  }, [category, sortBy]);
  console.log("sortBy::", sortBy);
  return (
    <div
      style={{
        height: "auto",
        width: "200px",
        border: "1px solid blue",
      }}
    >
      <div>
        <h3>Filter</h3>
        <div>
          <input
            type="checkbox"
            onChange={handleFilterChange}
            value="K-Pop"
            defaultChecked={category.includes("K-Pop")}
          />
          <label>K-Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleFilterChange}
            value="Pop"
            defaultChecked={category.includes("Pop")}
          />
          <label>Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleFilterChange}
            value="Country"
            defaultChecked={category.includes("Country")}
          />
          <label>Country</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleFilterChange}
            value="Holiday"
            defaultChecked={category.includes("Holiday")}
          />
          <label>Holiday</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleFilterChange}
            value="Rock"
            defaultChecked={category.includes("Rock")}
          />
          <label>Rock</label>
        </div>
      </div>
      <div>
        <h3>Sort</h3>
        <div>
          <input
            value={"asc"}
            defaultChecked={sortBy === "asc"}
            type="radio"
            name="sortBy"
            onChange={(e) => setSortBy(e.target.value)}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            value={"desc"}
            defaultChecked={sortBy === "desc"}
            type="radio"
            name="sortBy"
            onChange={(e) => setSortBy(e.target.value)}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
