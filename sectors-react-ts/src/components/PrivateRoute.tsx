import {Header} from "./Header.tsx";
import {Outlet} from "react-router-dom";
import {PrivateButtonGroup} from "./PrivateButtonGroup.tsx";

export function PrivateRoute() {
    return <div>
        <Header buttons={<PrivateButtonGroup />}/>
        <main>
            <Outlet/>
        </main>
    </div>
}