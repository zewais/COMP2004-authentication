import { useLocation, Link } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Home Page</h1>
      <a href="/profile-page">Profile Page with anchor</a>
      <br />
      <Link to="/profile-page">Profile Page with Link</Link>
      <br />
      <Link to="/form-page">Create User</Link>
      {/* The main differnce between an anchor and Link is anchor will
      cause a full page reload while Link will work as inteneded for a 
      Single Page App where the componant is loaded on the same page. 
      Beacuase of this you can preserve the state between page and access
      them.*/}
    </div>
  );
}
