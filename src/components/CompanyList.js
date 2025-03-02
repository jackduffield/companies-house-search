import React from 'react';

const CompanyList = ({ companies, onSelectCompany }) => {
  if (companies === null) return null;

  return (
    <div className="company-list">
      {companies.length === 0 ? (
        <p>No companies found.</p>
      ) : (
        companies.map((company) => (
          <div
            key={company.company_number}
            className="company-item"
            onClick={() => onSelectCompany(company)}
          >
            <h2>{company.title}</h2>
            <p>{company.company_number}</p>
            <p>{company.address_snippet}</p>
          </div>
        ))
        
      )}
    </div>
  );
};

export default CompanyList;
