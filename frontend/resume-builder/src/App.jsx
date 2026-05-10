import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import {LandingPage} from "./pages/LandingPage.jsx"
import {Dashboard} from "./pages/Home/Dashboard.jsx"
import {EditResume}from "./pages/ResumeUpdate/EditResume.jsx"
import UserProvider from "./context/UserContext.jsx";
const App = () => {
    return (
        <UserProvider>
        <div>
            <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/resume/:resumeId" element={<EditResume/>}/>
            </Routes>
            </Router>
        </div>
        <Toaster toastOptions={
            {
                className:"",
                style:{
                    fontSize:"13px",
                },
            }
        }/>
        </UserProvider>
    )
}

export default App;