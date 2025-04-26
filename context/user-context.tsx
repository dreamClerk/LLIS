"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// User type for our application
export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "editor" | "student" | "guest"
  avatar?: string
  dob?: string
}

interface UserContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string, dob?: string, avatar?: string) => Promise<boolean>
  logout: () => Promise<void>
  isLoading: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

// In a real application, you would want to use a proper backend service
// This is just a simple example using localStorage
const LOCAL_STORAGE_KEY = 'user_data'

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing user session on mount
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        setIsLoading(true)
        const storedUser = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Error checking session:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkUserSession()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real application, you would validate credentials against a backend
      // This is just a simple example
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: 'student',
      }
      
      setUser(mockUser)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockUser))
      return true
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const register = async (
    email: string,
    password: string,
    name: string,
    dob?: string,
    avatar?: string,
  ): Promise<boolean> => {
    try {
      // In a real application, you would create a user in your backend
      // This is just a simple example
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        role: 'student',
        dob,
        avatar,
      }
      
      setUser(mockUser)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockUser))
      return true
    } catch (error) {
      console.error("Registration error:", error)
      return false
    }
  }

  const logout = async () => {
    try {
      setUser(null)
      localStorage.removeItem(LOCAL_STORAGE_KEY)
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
