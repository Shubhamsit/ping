import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



// fetchUser

  const fetchLoggedInUser = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/me", {
        withCredentials: true,
      });

      console.log(data, "data bhai");

      if (data.success) {
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoggedInUser();
  }, []);

// Login

  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (data.success) {
        setUser(data.user);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

// signUp

  const signup = async (name, email, password) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/signup",
        { name, email, password },
        { withCredentials: true }
      );

      toast.success(data.message);
      return data.message;
    } catch (error) {
      console.log(error, "signup error");
      toast.error(error);
    }
  };

// logout

  const logout = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/auth/logout", {
        withCredentials: true,
      });

      if (data.success) {
        setUser(null);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
