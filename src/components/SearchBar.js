import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const searchCompanies = async (e) => {
  e.preventDefault();
  try {
    const apiKey = process.env.REACT_APP_COMPANIES_HOUSE_API_KEY;

    if (!apiKey) {
      throw new Error("API key is missing. Check your .env file.");
    }

    const encodedKey = btoa(`${apiKey}:`);

    const response = await axios.get("/search/companies", {
      params: { q: query },
      headers: {
        Authorization: `Basic ${encodedKey}`,
        Accept: "application/json",
      },
    });

    onSearch(response.data.items || []);
  } catch (error) {
    console.error("Error fetching company data:", error);
    alert("Error fetching company data. Check your API key or network.");
  }
};


  return (
    <form onSubmit={searchCompanies}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a company..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
