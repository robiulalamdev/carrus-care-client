import { useState, useEffect } from "react";
import { baseQuery } from "../api";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      fetch(`${baseQuery}/users/user-info/me`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("carrus_care")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.message === "Forbidden Access") {
            setIsLogged(false);
            setIsLoading(false);
          } else {
            // console.log(data);
            if (data?.success) {
              setIsLogged(true);
              setUser(data?.user);
            }
            setIsLoading(false);
          }
        });
    } catch (error) {
      setIsLogged(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const logout = () => {
    setIsLoading(true);
    localStorage.removeItem("carrus_care");
    setUser(null);
    setIsLogged(false);
  };

  const refetch = async () => {
    setIsLoading(true);
    await fetchData();
  };

  return { user, isLoading, isLogged, setIsLogged, refetch, setUser, logout };
};

export default useAuth;
