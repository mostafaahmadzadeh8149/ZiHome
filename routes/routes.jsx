import Home from "./../src/pages/home/home";
import Category from "./../src/pages/category/category";
import Search from "../src/pages/search/search";
import ShoppingCart from "../src/pages/shoppingCart/shoppingCart";
import ProductDetails from "../src/pages/productDetails/productDetails";
import BannerPageHeader from "../src/pages/bannerPageHeader/bannerPageHeader";
import CategoryProduct from "../src/pages/categoryProduct/categoryProduct";
import AllProuduct from "../src/pages/allProduct/allProduct";
import TermsZihome from "../src/pages/rules/terms";
import RulesAndPrivate from "../src/pages/rules/rulesAndPrivate";
import UserPanel from "../src/pages/panel/userPanel";
import AdminPanel from "../src/pages/panel/adminPanel";
import LoginPage from "../src/pages/login/login";
import PrivateRoutes from "../src/components/privateRoute/privateRoute";
import Profile from "../src/pages/profile/profile";
import ProfileHome from "./../src/pages/profileHome/profileHome";
import UserOrders from "../src/pages/userOrders/userOrders";
import AdminUsers from "../src/pages/adminUsers/adminUsers";
import Account from "../src/pages/accounts/accounts";
import FAQ from "../src/pages/questions/qustions";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/shoppingCart",
    element: (
      <PrivateRoutes role="user">
        <ShoppingCart />
      </PrivateRoutes>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/productDetails/:category/:id",
    element: <ProductDetails />,
  },
  {
    path: "/BannerHeader/:slug",
    element: <BannerPageHeader />,
  },
  {
    path: "/categoryProduct/:categoryName",
    element: <CategoryProduct />,
  },
  {
    path: "/allProducts/:type",
    element: <AllProuduct />,
  },
  {
    path: "/terms",
    element: <TermsZihome />,
  },
  {
    path: "/rules",
    element: <RulesAndPrivate />,
  },
  {
    path: "/userPanel",
    element: (
      <PrivateRoutes role="user">
        <UserPanel />
      </PrivateRoutes>
    ),
  },
  {
    path: "/adminPanel",
    element: (
      <PrivateRoutes role="admin">
        <AdminPanel />
      </PrivateRoutes>
    ),
  },
  // {
  //   path: "/profile",
  //   element: (
  //     <PrivateRoutes>
  //       <Profile />
  //     </PrivateRoutes>
  //   ),
  // },
  {
    path: "/profile",
    element: (
      <PrivateRoutes>
        <Profile />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <ProfileHome />,
      },
      {
        path: "orders",
        element: <UserOrders />,
      },
      {
        path: "admin/users",
        element: (
          <PrivateRoutes role="admin">
            <AdminUsers />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
];
export default routes;
