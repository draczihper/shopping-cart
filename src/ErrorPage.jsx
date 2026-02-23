import { Link } from "react-router";


const ErrorPage = () => {
    return (
        <div>
            <h1>Uh oh!, Looks like you are lost</h1>
            <Link to="/">
                Click here to go home           
            </Link>
        </div>
    )
}

export default ErrorPage;