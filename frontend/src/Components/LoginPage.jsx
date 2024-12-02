import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import FormComponent from "./FormComponent";
export default function LoginPage() {
  //States
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");

  //Handlers
  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    setFormData({ username: "", password: "" });
  };

  const handleLogin = async () => {
    try {
      await axios
        .post("http://localhost:3000/login", {
          username: formData.username,
          password: formData.password,
        })
        .then((response) => {
          setPostResponse(response.data);
        });
    } catch (error) {
      setPostResponse(response.data);
    }
  };

  //Render
  return (
    <FormComponent
      goToPage={"register"}
      currentPage={"login"}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      formData={formData}
      postResponse={postResponse}
    />
  );
}
