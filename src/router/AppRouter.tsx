import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AdminPage from "../pages/AdminPage"
import DashboardPage from "../pages/Dashboard"
import AnalitycsPage from "../pages/AnalitycsPage"
import LoginPage from "../pages/LoginPage"
import ProtectedRoute from "../components/ProtectedRoute"


const AppRouter = () => {

return(
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            
            <Route element={<ProtectedRoute/>}>
                <Route path="/analitycs" element={<AnalitycsPage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
            </Route>

            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <DashboardPage/>
                </ProtectedRoute>
            }/>
        </Routes>
    </>
)

}

export default AppRouter