import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
function AppRouter(){
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<h1 className="text-3xl font-bold underline">Hello World!</h1>} />
  ));

  return <RouterProvider router={router}></RouterProvider>
}
export default function App() {
  return <AppRouter />;
  
}