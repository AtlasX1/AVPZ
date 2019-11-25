import React from "react";
import TD from "./td";
// const TR = ({ rowIndex, data, updateData }) => (
//   <tr>
//     {data.map((el, i) => (

//       <TD data={el} rowIndex={rowIndex} colIndex={i} updateData={updateData}/>
//     ))}
//   </tr>
// );
const TR = ({ rowIndex, data, updateData }) => {
  
  return (
    <tr>
      {data.map((el, i) => (
        <TD
          data={el}
          rowIndex={rowIndex}
          colIndex={i}
          updateData={updateData}
        />
      ))}
    </tr>
  );
};
export default TR;
