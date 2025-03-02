import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyDetail = ({ company }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const apiKey = process.env.REACT_APP_COMPANIES_HOUSE_API_KEY;
        if (!apiKey) {
          throw new Error("API key is missing! Check your .env file.");
        }

        const encodedKey = btoa(`${apiKey}:`);

        const response = await axios.get(`/company/${company.company_number}`, {
          headers: {
            Authorization: `Basic ${encodedKey}`,
            Accept: "application/json",
          },
        });

        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching company details:', error);
      }
    };

    fetchCompanyDetails();
  }, [company.company_number]);

  return (
    <div className="company-detail">
      {details ? (
        <>
          <h2>{details.company_name}</h2>
          <p>Company Number: {details.company_number}</p>
          <p>Status: {details.company_status}</p>
          <p>Address: {details.registered_office_address?.address_line_1}</p>
          <p>Incorporation Date: {details.date_of_creation}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CompanyDetail;
