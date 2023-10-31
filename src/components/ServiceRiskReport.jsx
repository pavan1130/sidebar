import { React, useState } from "react";
import "../styles/ServiceRiskReport.css"; // Import the CSS file

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import speach from "../image/speach.png";
function ServiceRiskReport({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedicineData, setFilteredMedicineData] = useState([]);

  const medicineData = [
    {
      name: "Concerta ER 54mg 24cnt 30s AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [53, 46, 39, 32, 25, 18, 73, 66, 58, 63, 54, 78, 71, 63],
    },
    {
      name: "Concerta ER 18mg 24cnt 30s AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [
        81, 74, 108, 101, 135, 128, 121, 114, 107, 100, 134, 127, 120, 113,
      ],
    },
    {
      name: "Topamax 50mg 60 Sprinkle Caps AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [
        177, 170, 163, 156, 149, 142, 135, 128, 121, 170, 172, 165, 158, 151,
      ],
    },
    {
      name: "Invega Trinza 1x525mg SYR AUS-NZ",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [
        651, 644, 637, 630, 623, 616, 609, 602, 595, 588, 581, 574, 567, 560,
      ],
    },
    {
      name: "Eprex Protecs 20000U 6x0 5ml SYR AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [71, 64, 57, 51, 43, 50, 42, 50, 51, 63, 56, 49, 41, 35],
    },
    {
      name: "Eprex Protecs 30000U 6x0 3ml SYR AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [80, 73, 66, 59, 52, 44, 70, 63, 56, 70, 63, 56, 50, 41],
    },
    {
      name: "Eprex Protecs 80000U 6x0 8ml SYR AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [60, 53, 46, 72, 65, 58, 50, 47, 53, 64, 57, 49, 43, 37],
    },
    {
      name: "Imbruvica 560mg 30Tab AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    const filteredData = medicineData.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMedicineData(filteredData);
  };
  return (
    <>
      <div className="service-risk-report">
        <div className="filters">
          <p>Filters</p>
          <FontAwesomeIcon icon={faFilter} className="icon" />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            class="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <button className="go-button" onClick={handleSearchSubmit}>
            Go
          </button>
        </div>
        <div className="dropdowns">
          <select className="dropdown">
            <option value="AUS">AUS</option>
            <option value="AUS">ENG</option>
            <option value="AUS">IND</option>
          </select>
          <select className="dropdown">
            <option value="Week">Week</option>
            <option value="Week">SUN</option>
            <option value="Week">MON</option>
          </select>
        </div>
        <div className="date-range">
          <input type="date" value="2023-09-04" />
          <input type="date" value="2023-12-05" />
        </div>
        <button className="red-button">1 USD = 7 RMB</button>
      </div>
      <div className="serviceRiskReport-container">
        <table className="serviceRiskReport-table">
          <thead>
            <tr>
              <th className="grey-heading-border">Medicine</th>
              {medicineData[0].dates.map((date, index) => (
                <th key={index} className="grey-heading-border">
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredMedicineData.map((medicine, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "white-row" : "light-grey-row"}
              >
                <td className="bold-text border medicine-name">
                  <input type="checkbox" /> {medicine.name}
                </td>
                {medicine.additionalData.map((data, index) => (
                  <td key={index} className="border">
                    {data}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>

      <div className="container">
        <img className="image" src={speach} alt="An image" />
        <input className="input-field" type="text" placeholder="Your input" />
        <button className="submit-button">Submit</button>
      </div>
    </>
  );
}

export default ServiceRiskReport;
