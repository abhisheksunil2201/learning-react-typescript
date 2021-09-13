import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const[user,setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () =>{
        setUser({
            name: "Abhishek",
            email: "abhi@gmail.com"
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* Without optional chaining, we can access object using type assertion */}
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}