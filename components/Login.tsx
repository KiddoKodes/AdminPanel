import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { authState } from '../atoms/auth'
import { login } from "../services/auth/"
const Login = () => {
    const [user, setUser] = useRecoilState(authState)
    const email: any = useRef("")
    const password: any = useRef("")
    const handler = async (e: any) => {
        e.preventDefault()
        try {
            const user = await login(email.current.value, password.current.value)
            console.log(user)
            setUser(user)
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="login flex h-screen justify-center items-center">
            <div className="w-3/4 h-3/4 bg-black flex flex-col  md:flex-row justify-between">
                <div className="login-content md:w-1/2 p-8">
                    <h1 className="text-4xl underline decoration-green-700">LOGIN</h1>
                    <form onSubmit={handler}>
                        <input type="text" className="input" placeholder="Email" required ref={email} />
                        <input type="password" className="input" placeholder="Password" required ref={password} />
                        <button type="submit" className="btn">Login</button>
                    </form>
                </div>
                <div className="login-llustration self-center w-full md:w-1/2 h-full">
                    <div style={{ backgroundImage: "url('/TMP_poster.jpg')" }} className="w-full h-full bg-green-500 bg-blend-color-burn bg-cover"></div>
                </div>
            </div>
        </div>
    )
}

export default Login