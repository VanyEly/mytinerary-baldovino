import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import DetailCity from "./pages/DetailCity";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useDispatch } from "react-redux";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useEffect } from "react";

const router = createBrowserRouter([
  {path:'/', element: <Layout />, children: [
    {path:'/', element: <Home />}
  ]},
  {path:'/cities', element: <Layout />, children: [
    {path:'/cities', element: <Cities />}
  ]},
  {path:'/city/:id', element: <Layout />, children: [
    {path:'/city/:id', element: <DetailCity />}
  ]},
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },


])


// function App() {

// const dispatch = useDispatch

// useEffect(() => {
//   dispatch(userActions.authenticate())
// },[])

//   return (
//     <div className="w-full min-h-screen">
//       <RouterProvider router={router}></RouterProvider> 
//     </div>
//   );
// }
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(signInWithToken());
    }
  }, []);

  return <RouterProvider router={router} />;
}


export default App;