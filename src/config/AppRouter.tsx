import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../layout/DashBoard";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element= {<DashBoard/>} /> 
          {/* to make nested routes we put /* in the path otherwise it wont work*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
