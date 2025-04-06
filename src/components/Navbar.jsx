import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "./NewContext";
import stylesx from "../styles/ItemCard.module.css";

function Navbar() {
  const value=useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
      <button className={stylesx.itemButton} onClick={value.toggle}>Cart</button>
      <button className={stylesx.itemButton} onClick={value.handleReset}>Reset</button>
    </div>

  );
}

export default Navbar;
