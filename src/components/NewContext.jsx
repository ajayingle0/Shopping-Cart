import { createContext } from "react";
import { useState ,useContext} from 'react';
import CartModel from "./CartModel";
const newContext =createContext();


//Created the Custom Hook here
function useValue(){
    const value=useContext(newContext)
    return value;
}

//Created the Custom Provider
function CustomItemContext({children}){
    // console.log();
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cart,setCart]=useState([]);

    const handleAdd = (prod) => { 
      const index = cart.findIndex((item)=>item.id===prod.id);
      if(index===-1)
      {
        setCart([...cart,{...prod,qty:1}]);
        setTotal(total+prod.price);
        console.log(cart); 
      }
      else{
        // setCart([...cart,{...prod,qty:prod.qty+1}]);
        cart[index].qty++;
        setCart(cart)
        setTotal(total+cart[index].price);
        // console.log(cart); 
      }
      setItem(item+1)
      };

      const handleReset=()=>{
        setTotal(0);
        setItem(0);
        setCart([])
      }
    
      const handleRemove = (id) => {
        const index = cart.findIndex((item)=>item.id===id);
  
        if(index !==-1){
         cart[index].qty--;
         setItem(item-1);
         setTotal(total-cart[index].price);
         if(cart[index].qty==0){
          cart.splice(index,1)
         }
        }
        setCart(cart);
       

      };


      const toggle =()=>{
        setShowCart(!showCart);
      }

return(
        <newContext.Provider value={{total,setTotal,item,setItem,handleRemove,handleAdd,handleReset,toggle,cart}}>
          {showCart && <CartModel />}
          {children}
        </newContext.Provider>
)
}


export {newContext,useValue};
export default CustomItemContext;
