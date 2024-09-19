import { AuthContext } from "@/contexts/AuthContext"
import { useContext } from "react"

export default function useAuth() {
    const context = useContext(AuthContext)
    // if (!context) throw new Error("Context not Working")
    return context
}