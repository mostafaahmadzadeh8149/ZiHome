import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "../routes/routes";
import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/authContext";
// function App() {
//   let allRoutes = useRoutes(routes);
//   return allRoutes;
// }

// export default App;
//نکته : وقتی تعداد کانتسکت ها بیشتر شد باید یک فایل جدا ساخت به اسم مثلا :
//AppProvider.jsx
function App() {
  // return <CartProvider>{useRoutes(routes)}</CartProvider>;
  return (
    <AuthProvider>
      <CartProvider>{useRoutes(routes)}</CartProvider>
    </AuthProvider>
  );
}
export default App;
