// import React, { useContext } from "react";
// import Banner from "../Banner/Banner";

// function PerferenceHeader() {

//   return (
//     <div className="header-container" onSubmit>
//       <Banner pageName="Perference" />
//       <form className="form-container">
//         <div className="search-container">
//           {/* Search input */}
//           <input
//             type="search"
//             id="search-input"
//             className="input" // Add the new class here
//           />
//         </div>
//         <button type="submit" className="button">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }

// export default PerferenceHeader;
import React, { useState } from "react";
import Banner from "../Banner/Banner";

function PerferenceHeader({}) {
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
  };

  return (
    <div className="header-container">
      <Banner pageName="Perference" />
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            type="search"
            id="search-input"
            className="input"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
}

export default PerferenceHeader;
