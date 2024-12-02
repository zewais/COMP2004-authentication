import { useLocation, Link } from "react-router-dom";
export default function ProfilePage() {
  const location = useLocation();
  console.log(location);
  const users = location.state;
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </li>
          );
        })}
      </ul>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
