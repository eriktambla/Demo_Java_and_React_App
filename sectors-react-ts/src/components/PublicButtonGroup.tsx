import {Link} from "react-router-dom";

export function PublicButtonGroup() {
    return <>
        <Link to="/signup"
              className="text-black bg-white rounded-lg border px-2 py-3 hover:border-blue-500 hover:text-black">Sign
            up</Link>
        <Link to="/login"
              className="text-black bg-white rounded-lg border px-2 py-3 hover:border-blue-500 hover:text-black">Login</Link>
    </>
}