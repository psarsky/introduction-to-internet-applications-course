import "./Layout.css";
import { Outlet, Link } from "react-router-dom";

const Layout = () => (
	<>
		<nav>
			<Link className="navItem" to="/">
				Home
			</Link>
			<Link className="navItem" to="/blog">
				Blog
			</Link>
			<Link className="navItem" to="/add">
				Submit
			</Link>
		</nav>
		<Outlet />
	</>
);

export default Layout;
