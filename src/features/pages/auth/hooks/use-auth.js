import { loginService } from "../services/auth.service"
import { useAuthStore } from "../store/auth-store"

export const useAuth = () => {

    const { token, setToken, logout } = useAuthStore()

    const login = async ( {username, password} ) => {
        const token = await loginService({ username, password})

        setToken(token)
    }

    return {
        token,
        login,
        logout,
        isAuthenticated: token
    }
}