import React, { createContext, useContext, useState, useEffect } from "react";

type UserRole =
  | "parent"
  | "student"
  | "staff"
  | "admin"
  | "nurse"
  | "coach"
  | "transport"
  | "vendor";

interface User {
  id: string;
  email: string;
  role: UserRole;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (
    email: string,
    password: string,
    role: UserRole
  ) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ================================================
//  REPLACE THIS AREA WITH YOUR BACKEND API CALLS
// ================================================

// Simulated “session storage based login system”
const authApi = {
  async getSession(): Promise<{ user: User } | null> {
    const raw = localStorage.getItem("auth-session");
    return raw ? (JSON.parse(raw) as { user: User }) : null;
  },

  async signIn(email: string, password: string): Promise<{ user: User }> {
  // Dummy database
  const demoUsers: Record<string, { password: string; role: UserRole; name: string }> = {
    "parent@mail.com": { password: "demo123", role: "parent", name: "Parent User" },
    "student@mail.com": { password: "demo123", role: "student", name: "Student User" },
    "staff@mail.com": { password: "demo123", role: "staff", name: "Staff User" },
    "admin@mail.com": { password: "demo123", role: "admin", name: "Admin User" },
    "nurse@mail.com": { password: "demo123", role: "nurse", name: "Nurse User" },
    "coach@mail.com": { password: "demo123", role: "coach", name: "Coach User" },
    "transport@mail.com": { password: "demo123", role: "transport", name: "Transport User" },
    "vendor@mail.com": { password: "demo123", role: "vendor", name: "Vendor User" },
  };

  const userRecord = demoUsers[email];

  if (!userRecord || userRecord.password !== password) {
    throw new Error("Invalid email or password");
  }

  return {
    user: {
      id: Date.now().toString(),
      email,
      role: userRecord.role,
      name: userRecord.name,
    },
  };
},


  async saveSession(user: User): Promise<void> {
    localStorage.setItem("auth-session", JSON.stringify({ user }));
  },

  async clearSession(): Promise<void> {
    localStorage.removeItem("auth-session");
  },
};

// ================================================
//  AUTH PROVIDER
// ================================================

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load session on mount
  useEffect(() => {
    const loadSession = async () => {
      const session = await authApi.getSession();
      if (session?.user) setUser(session.user);
      setLoading(false);
    };
    loadSession();
  }, []);

  const signIn = async (email: string, password: string, role: UserRole) => {
    try {
      const result = await authApi.signIn(email, password);

      if (result.user.role !== role) {
        return {
          success: false,
          error: `Invalid credentials for ${role} portal.`,
        };
      }

      setUser(result.user);
      await authApi.saveSession(result.user);

      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Invalid email or password",
      };
    }
  };

  const signOut = async () => {
    await authApi.clearSession();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
