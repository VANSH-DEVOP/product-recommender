import React from "react";
import { useState } from "react";

function SearchBox({ onSearch, loading }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Example: I want a phone under $500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "400px",
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Get Recommendations"}
      </button>
    </form>
  );
}

export default SearchBox;