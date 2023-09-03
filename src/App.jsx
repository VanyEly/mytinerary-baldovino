import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import DetailCity from "./pages/DetailCity";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

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
 


])


function App() {
  return (
    <div className="w-full min-h-screen">
      <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;