import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="homePage">
			<h1>Welcome!</h1>
			<h2>
				You will find some interesting articles on the{" "}
				<Link className="blogLink" to="/blog">
					blog page
				</Link>
				.
			</h2>
		</div>
	);
};

export default Home;
