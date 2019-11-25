import React from "react";

const D = props => {
  if (props.colIndex === 0 || props.colIndex === 12 || props.rowIndex === 0) {
    return (
      <td style={{ width: "10px", height: "10px" }}>
        <input type="text" readonly="readonly" value={props.data} />
      </td>
    );
  }
  if (props.colIndex === 1) {
    return (
      <td style={{ width: "330px", height: "20px" }}>
        <input type="text" readonly="readonly" value={props.data} />
      </td>
    );
  } else {
    return (
      <td style={{ width: "10px", height: "10px" }}>
        <input
          type="number"
          step="0.01"
          min = "0"
          max = "1"
          defaultValue={props.data}
          onChange={e =>
            props.updateData(+e.target.value, props.rowIndex, props.colIndex)
          }
        />
      </td>
    );
  }
};

export default D;
