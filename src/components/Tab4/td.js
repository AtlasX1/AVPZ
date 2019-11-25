import React from "react";
const D = props => {
  if (props.rowIndex === 0) {
    return (
      <td style={{ width: "180px", height: "10px" }}>
        <input type="text" readonly="readonly" value={props.data} />
      </td>
    );
  }

  if (props.colIndex === 0) {
    return (
      <td>
        <input type="text" readonly="readonly" value={props.data} />
      </td>
    );
  } else {
    return (
      <td style={{ width: "120px", height: "30px" }}>
        <select
          style={{ width: "80%", height: "30px" }}
          onChange={e => {
            props.updateData(e.target.selectedIndex, props.rowIndex - 1);
            console.log(e.target.selectedIndex + "  :   " + (props.rowIndex - 1));
          }}
        >
          {props.data[0].map(team => (
            <option value={team.value}>{team}</option>
          ))}
        </select>
      </td>
    );
  }
};

export default D;
