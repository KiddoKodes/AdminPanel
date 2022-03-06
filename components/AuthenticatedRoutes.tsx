import React from 'react'
import { useRecoilState } from 'recoil'
import { authState } from '../atoms/auth'
import Loading from './Loading'
import Login from './Login'

const AuthenticatedRoutes = ({ children }: any) => {
    const [{ isAuthenticated, loading }, _] = useRecoilState(authState)
    if (!isAuthenticated && !loading) {
        return <>{children}</>
    }
    else if (loading && !isAuthenticated) {
        return <Loading />
    }
    else return <Login />
}

export default AuthenticatedRoutes