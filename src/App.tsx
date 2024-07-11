import {Navigate, Route,Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.tsx";
import {SignUpPage} from "./pages/SignUpPage.tsx";
import {CabinetsPage} from "./pages/CabinetsPage.tsx";

function App() {
    //Routing
  return (
    <Routes>
        <Route path={"/"} element={<Navigate to={"/login"} replace={true}/>}/>

      <Route path={"/login"} element={<LoginPage/>}/>
      <Route path={"/signup"} element={<SignUpPage/>}/>

        <Route path={"/cabinet"} element={<CabinetsPage/>}>

      </Route>
    </Routes>
  )
}

export default App
