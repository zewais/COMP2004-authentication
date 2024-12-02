import "./App.css";
import HomePage from "./Components/HomePage";
import ProfilePage from "./Components/ProfilePage";
import FormPage from "./Components/FormPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/form-page" element={<FormPage />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
