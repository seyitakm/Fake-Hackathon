import Navbar from "./components/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import Cards from "./components/Cards";

function App() {
  return (
    <ProductContextProvider>
      <Navbar />
      <MainRoutes />
    </ProductContextProvider>
  );
}

export default App;
