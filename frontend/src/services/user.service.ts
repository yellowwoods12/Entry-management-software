// types
import { User } from "../types";

const login = ({
  email,
  name,
  phone,
 
}: {
  email: string;
  name: string;
  phone: string;
  
}): Promise<User> => {
  const config: RequestInit = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify({ email, name, phone })
  };

  // send request to auth server if succesfull save user into local storage or session storage based on user choice
  return fetch("http://localhost:5000/api/login", config)
    .then(handleResponse)
    .then((user: User) => {
      // if user selected remember me save in local storage else in a session storage
      
      return user;
    });
};

function register({
  fullName,
  Hostemail,
  Hostphone
}: {
  fullName: string;
  Hostemail: string;
  Hostphone: string;
}) {
  const config: RequestInit = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify({ fullName, Hostemail, Hostphone })
  };
  return fetch("http://localhost:5000/api/user", config).then(handleResponse);
}

const logout = (): void => {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
};

const handleResponse = (response: Response): any => {
  return response.text().then(text => {
    console.log(text);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const userService = {
  login,
  register,
  logout
};
