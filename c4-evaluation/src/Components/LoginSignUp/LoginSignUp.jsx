import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../Redux/Login/action";

export const LoginSignUp = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const obj = {
    name: "",
    password: "",
    location: "",
    interests: [],
    image: "",
  };
  //signup
  const [userData, setUserdata] = useState(obj);

  const handleChange = (e) => {
    let { id, value, checked } = e.target;
    if (checked) {
      setUserdata({ ...userData, interests: [...userData.interests, id] });
    } else {
      setUserdata({
        ...userData,
        [id]: value,
      });
    }
  };

  const signupHandleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/users", userData).then(() => {
      alert("User registerd successfully");
    });
  };

  //login

  const logObj = {
    name: "",
    password: "",
  };

  const [logUser, setLoguser] = useState(logObj);
  const [userServerdata, setUserserverData] = useState({});

  //handleChange
  const logHandleChange = (e) => {
    const { id, value } = e.target;

    setLoguser({
      ...logUser,
      [id]: value,
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios.get("http://localhost:8080/users").then((res) => {
      setUserserverData(res.data);
    });
  };
  console.log(userServerdata);
  //Login submit
  const logHandleSubmit = (e) => {
    e.preventDefault();

    let flag = false;
    for (let i = 0; i < userServerdata.length; i++) {
      if (
        userServerdata[i].name == logUser.name &&
        userServerdata[i].password == logUser.password
      ) {
        flag = true;
      }
    }
    if (flag) {
      alert("logged in successfully");
      dispatch(userLogin({ user: true }));
      navigate("/");
    } else {
      alert("Enter valid credentials");
    }
  };

  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={signupHandleSubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          id="name"
          onChange={handleChange}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          id="password"
          onChange={handleChange}
          required
        />
        <br />
        <select className="location" id="location" onChange={handleChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          id="technology"
          onChange={handleChange}
        />
        <br />
        <label>food</label>
        <input
          type="checkbox"
          className="food"
          id="food"
          onChange={handleChange}
        />
        <br />
        <label>movies</label>
        <input
          type="checkbox"
          className="movies"
          id="movies"
          onChange={handleChange}
        />
        <br />
        <label>culture</label>
        <input
          type="checkbox"
          className="culture"
          id="culture"
          onChange={handleChange}
        />
        <br />
        <label>art</label>
        <input
          type="checkbox"
          className="art"
          id="art"
          onChange={handleChange}
        />
        <br />
        <label>drama</label>
        <input
          type="checkbox"
          className="drama"
          id="drama"
          onChange={handleChange}
        />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          id="image"
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" id="submitSignup" />
      </form>

      {/*  */}
      <form className="login" onSubmit={logHandleSubmit}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          id="name"
          onChange={logHandleChange}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          id="password"
          onChange={logHandleChange}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" id="submitLogin" />
      </form>
    </div>
  );
};
