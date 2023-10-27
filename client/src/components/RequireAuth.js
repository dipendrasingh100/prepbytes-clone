import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import { loadUser } from "../app/userSlice"

const RequireAuth = () => {
    //logic to check if user is logged in
    const location = useLocation()
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(state => state.user)
    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    return (
        <>
            {
                isAuthenticated ? <Outlet /> :
                    <Navigate to='/login' state={{ from: location }} replace />
            }
        </>
    )
}

export default RequireAuth
