import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CompanyList from './components/CompanyList';
import CompanyDetail from './components/CompanyDetail';
import './styles.css';

function App() {
  const [companies, setCompanies] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSearch = (results) => {
    setCompanies(results);
    setSelectedCompany(null);
  };

  return (
    <div className="App">
      <h1>UK Companies Search</h1>
      <h3>Created by Jack Duffield</h3>
      <p>Use this app to search for a company using the Companies House API. Click on a result to view further details about the company.</p>
      <SearchBar onSearch={handleSearch} />
      {selectedCompany ? (
        <CompanyDetail company={selectedCompany} />
      ) : (
        <CompanyList companies={companies} onSelectCompany={setSelectedCompany} />
      )}
    </div>
  );
}

export default App;