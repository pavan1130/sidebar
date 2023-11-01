import { React, useState } from "react";
import "../styles/ServiceRiskReport.css"; // Import the CSS file

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import speach from "../image/speach.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineSwapRight } from "react-icons/ai";

function ServiceRiskReport() {
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMedicineData = medicineData.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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

          <button className="go-button">Go</button>
        </div>
        <div className="dropdowns">
          <select className="dropdown-a">
            <option value="AUS">AUS</option>
            <option value="AUS">ENG</option>
            <option value="AUS">IND</option>
          </select>
          <select className="dropdown-b">
            <option value="Week">Week</option>
            <option value="Week">SUN</option>
            <option value="Week">MON</option>
          </select>
        </div>
        <div className="date-range">
          <p>
            2023-09-04{" "}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: "4px",
              }}
            >
              <AiOutlineSwapRight />
            </span>
            2023-12-05
          </p>
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
        <button className="previous-btn">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginRight: "2px",
            }}
          >
            <AiOutlineArrowLeft style={{ marginRight: "5px" }} />
            Previous
          </span>
        </button>

        <button className="next-btn">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginRight: "2px",
            }}
          >
            <AiOutlineArrowRight style={{ marginRight: "5px" }} />
            Next
          </span>
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
