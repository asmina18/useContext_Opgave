import { Link } from "react-router-dom"

export const NotFoundPage = () => {

    return (
        <>
            <h1>404 Not found</h1>
            <h4>An unknown error occured</h4>
            <Link to="/">Click here to go back</Link>
        </>
    )
}