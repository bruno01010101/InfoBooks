import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";

export default function ProtectedRoute() {
    const loged = localStorage.getItem('logado');
    const navigate = useNavigate()

    useEffect(() => {
        if (loged) {
            return

        } else {
            (navigate('/auth/login'))
        }
    }, [navigate, loged])

    if(loged){
        return (<Outlet />)
    }

}