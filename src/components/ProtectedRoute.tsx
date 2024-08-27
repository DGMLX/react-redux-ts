import { Navigate, Outlet } from "react-router-dom"

type Props = {
    children:JSX.Element | JSX.Element[] 
  }

const ProtectedRoute = ({children}:Props) => {

    return(
        <>
            if(!user)(
                <Navigate to="/"/>    
            )
            return {children ? children : <Outlet/>}
    
        </>
    )
}

export default ProtectedRoute