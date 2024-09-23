import { Navigate, Outlet } from "react-router-dom"

type Props = {
    children:JSX.Element | JSX.Element[] 
}

const ProtectedRoute = ({children}:Props) => {

    const user = true;

    return(
        <>
            if({!user})(
                <Navigate to="/"/>    
            )
            
            return {children ? children : <Outlet/>}
        
        </>
    )
}

export default ProtectedRoute