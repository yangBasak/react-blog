import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RouteList from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          {RouteList.map((route)=>(
            <Route key={route.path} path={route.path} element={route.element}></Route>
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
