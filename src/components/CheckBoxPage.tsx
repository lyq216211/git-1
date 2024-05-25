import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
const CheckboxPage = () => {
  const [checked, setChecked] = useState(false)
  const onChange = (e) => {
    setChecked(prev => {
      console.log('setChecked          '+!prev);

      return !prev;
    })
    console.log(`checked = ${e.target.checked}`, checked);
  };
  useEffect(() => {
    console.log('effect    '+checked);

  },[checked])
  return (
    <Checkbox value={checked} onChange={onChange}>Checkbox</Checkbox>
  )
}
export default CheckboxPage;
