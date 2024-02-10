import { Link } from "react-router-dom";

export function PrivateButtonGroup() {
  return (
    <Link to="/" onClick={() => console.log("logout")}>
      Logout
    </Link>
  );
}

