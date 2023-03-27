import { Link } from "react-router-dom";


const ErrorPage = () => {
    return ( 
        <div className="error-page">
            <h2>Sorry :(</h2>
            <p>This page does not exist.</p>
            <u><Link to="/"> Go Home</Link></u>
        </div>
     );
}
 
export default ErrorPage;