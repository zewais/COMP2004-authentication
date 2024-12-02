import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  //States
  const [formData, setFormData] = useState({ id: "", name: "", email: "" });
  const [users, setUsers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // This is a hook that allows you to navigate to a different page in your app.

  //Handlers
  const handleChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
        id: crypto.randomUUID(),
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevData) => {
      return [...prevData, formData];
    });
    setFormData({ id: "", name: "", email: "" });
    setIsSubmitted(true);
  };

  //Render
  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>Form Submitted</p>}
      <button onClick={() => navigate("/profile-page", { state: users })}>
        Go to Profile Page
      </button>
    </div>
  );
}
