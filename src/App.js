import './App.css';

import Items from './components/Items';
import Navbar from './components/Navbar';
import CustomItemContext, { newContext } from './components/NewContext';

function App() {

  return (
    // <newContext.Provider value={{total,setTotal,item,setItem}} >
    <CustomItemContext>
        <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
        </div>
     </CustomItemContext>
    // </newContext.Provider>
  );
}
export default App;
