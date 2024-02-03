import {Link} from "react-router-dom";

interface HeaderProps {
    buttons?: JSX.Element;
}

export function Header(props: HeaderProps) {
    return (
        <div className="flex flex-row p-4 w-full items-center justify-between bg-blue-100">
            <Link to="/" className="text-black text-5xl">Sectors</Link>
            {props?.buttons &&  <div className="space-x-5 space-y-2">{props.buttons}</div>}
        </div>
    )
}