import NewShopForm from "./components/NewShopForm/NewShop";
import NewProductForm from "./components/NewProductForm/NewProduct";

const App = () => {
  return (
    <div>
      <div><h1 style={{color: "blue"}}>New Shop</h1></div>
      {<NewShopForm />}
      <div><h1 style={{color: "blue"}}>New Product </h1></div>
      {<NewProductForm />}
    </div>
  );
};

export default App;
