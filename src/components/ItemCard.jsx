import React from "react";
import styles from "../styles/ItemCard.module.css";
// import { useContext } from "react";
// import { newContext } from "./NewContext";
import { useValue } from "./NewContext";
function ItemCard({ name,id, price }) {
  const value = useValue();


  // const {setTotal,total,item,setItem} =value;
  // console.log(value);
  const {handleAdd,handleRemove} =value;

  // const handleAdd = () => { 
  //   setTotal(total+price);
  //   setItem(item+1)
  // };

  // const handleRemove = () => {
  //   if(item  == 0)
  //   {
  //     return;
  //   }

  //   setTotal(total-price);
  //   setItem(item-1);
  // };


  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({name,id, price} )}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
