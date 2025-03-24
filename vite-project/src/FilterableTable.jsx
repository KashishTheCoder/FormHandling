import { useState } from "react";

const sampleData = [
  { id: 1, name: "John Doe", age: 25, city: "New York", occupation: "Engineer" },
  { id: 2, name: "Jane Smith", age: 30, city: "San Francisco", occupation: "Designer" },
  { id: 3, name: "Mike Johnson", age: 28, city: "Los Angeles", occupation: "Developer" },
  { id: 4, name: "Emily Davis", age: 22, city: "Chicago", occupation: "Doctor" },
];

function FilterableTable() {
  const [filters, setFilters] = useState({ name: "", age: "", city: "", occupation: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = sampleData.filter((item) => {
    return (
      (filters.name === "" || item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.age === "" || item.age.toString().includes(filters.age)) &&
      (filters.city === "" || item.city === filters.city) &&
      (filters.occupation === "" || item.occupation === filters.occupation)
    );
  });

  const resetFilters = () => {
    setFilters({ name: "", age: "", city: "", occupation: "" });
  };

  return (
    <div>
      <h2>Filterable Table</h2>
      <div>
        <input type="text" name="name" placeholder="Filter by Name" value={filters.name} onChange={handleChange} />
        <input type="text" name="age" placeholder="Filter by Age" value={filters.age} onChange={handleChange} />
        <select name="city" value={filters.city} onChange={handleChange}>
          <option value="">All Cities</option>
          {[...new Set(sampleData.map((item) => item.city))].map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <select name="occupation" value={filters.occupation} onChange={handleChange}>
          <option value="">All Occupations</option>
          {[...new Set(sampleData.map((item) => item.occupation))].map((occupation) => (
            <option key={occupation} value={occupation}>{occupation}</option>
          ))}
        </select>
        <button onClick={resetFilters}>Reset Filters</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilterableTable;
