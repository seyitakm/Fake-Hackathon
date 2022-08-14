import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <ProductContextProvider>
      <MainRoutes />
    </ProductContextProvider>
  );
}

export default App;
