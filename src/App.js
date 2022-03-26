import { useSelector } from "react-redux";
import Login from "./components/Login";
import Profile from "./components/Profile";
import {BrowserRouter} from "react-router-dom"

function App() {
    const loggedStatus = useSelector((state)=> state.user.isLoggedIn)
    console.log(loggedStatus)

  return (
    <div className="App">
      
      <BrowserRouter>
        {!loggedStatus ? <Login/>
        : <Profile/> 
       }
       
       </BrowserRouter>
        
     
    </div>
  );
}

export default App;
