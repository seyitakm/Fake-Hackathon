import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <MainRoutes />
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
