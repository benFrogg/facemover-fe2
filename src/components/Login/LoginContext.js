import React, { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

export const LoginContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("theToken"));

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch("/users/me", requestOptions);

      if (!response.ok) {
        setToken(null);
      }
      localStorage.setItem("theToken", token);
    };
    fetchUser();
  }, [token]);

  return (
    <div>
      <LoginContext.Provider value={{ token, setToken }}>
        {props.children}
      </LoginContext.Provider>
    </div>
  );
};

export default LoginContext;
