import "./NoPage.css";
import { Link } from "react-router-dom";

const NoPage = () => {
	return (
		<div className="noPage">
			<h1>404</h1>
			<h2>The requested page does not exist.</h2>
			<Link className="homeLink" to="/">
				Return to homepage
			</Link>
		</div>
	);
};

export default NoPage;
