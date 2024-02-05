import React from 'react'
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useUserStore } from "../Store";
import CheckoutPage from '../pages/checkoutPage/CheckoutPage.js'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
// import SingleProductPage from '../pages/singleProductPage/SingleProductPage.js'
import AllProductsPage from '../pages/AllProductsPage/AllProductsPage'
const AppRoutes = () => {
    const { user } = useUserStore();
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<AllProductsPage />}
                ></Route>
                {/* <Route
              path="/single/:slug"
              element={
                <ProtectedRoute isAllowed={user} redirectPath="/login">
                  <SingleProductPage />{" "}
                </ProtectedRoute>
              }
            ></Route> */}
                  {/* <Route
              path="/cart"
              element={
                <ProtectedRoute isAllowed={user} redirectPath="/login">
                  <Cart />{" "}
                </ProtectedRoute>
              }
            ></Route> */}

                <Route
                    path="/shipping"
                    element={
                        <ProtectedRoute isAllowed={user} redirectPath="/login">
                            <CheckoutPage />{" "}
                        </ProtectedRoute>
                    }
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </div>
    )
}

export default AppRoutes
