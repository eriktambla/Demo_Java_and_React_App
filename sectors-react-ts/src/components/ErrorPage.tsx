import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div className="space-y-5">
                <h1>Oops!</h1>
                <h2>{error.status}: {error.statusText}</h2>
                {error.data?.message && <p>{error.data.message}</p>}
            </div>
        );
    }

    return <div>Oops!</div>

}