// import React from "react";
// import { Link } from "react-router-dom";
// import "./Products.css";

// const NavDrop = (props) => {
//   const splitData = (data) => {
//     let result = [];
//     let temp = [];
//     for (let i = 0; i < data.length + 1; i++) {
//       if (temp.length == 3 || i==data.length) {
//         result.push(temp);
//         temp = [data[i]];
//       } else {
//         temp.push(data[i]);
//       }
//     }
//     result.push(data);
//     console.log(result);
//     return result;
//   };

//   return (
//     <div className="products-dropdown link-list">
//       <div>{props.data[0].title}</div>
//       <hr />
//       <div className="dropdown-section">
//         {props.data.map((entry) => {
//           return (
//             <div style={{ padding: "60px" }}>
//               <div>
//                 <h3>{entry.heading}</h3>
//               </div>
//               <div style={{display:"flex",flexDirection:"row"}}>
//                 {splitData(props.data[0].products).map((productList) => {
//                   return (
//                     <ul>
//                       {productList.map((product) => {
//                         return (
//                           <div>
//                             <li style={{ padding: "10px" }}>
//                               <Link to="/product1">{product}</Link>
//                             </li>
//                           </div>
//                         );
//                       })}
//                     </ul>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default NavDrop;

///new code

import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const NavDrop = (props) => {
  return (
    <div className="products-dropdown link-list">
      <div>{props.data[0].title}</div>
      <hr />
      <div className="dropdown-section">
        {props.data.map((entry) => {
          return (
            <div style={{ padding: "60px" }}>
              <div>
                <h3>{entry.heading}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <ul>
                  {entry.products.map((product, index) => (
                    <li key={index} style={{ padding: "10px" }}>
                      <Link to={`/product${index + 1}`}>{product}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavDrop;

