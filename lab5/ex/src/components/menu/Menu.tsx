import { Link } from "react-router-dom";

const Menu = () => (
	<>
		<h1>Lab 5</h1>
		<br />
		<ul>
			<li>
				<Link to="/basket">1.1. Basket</Link>
			</li>
			<li>
				<Link to="/new-basket">1.2. New basket</Link>
			</li>
			<li>
				<Link to="/counter">2.1. Counter</Link>
			</li>
			<li>
				<Link to="/new-counter">2.2. New counter</Link>
			</li>
			<li>
				<Link to="/form">3.1. Form</Link>
			</li>
			<li>
				<Link to="/password">3.2. Password</Link>
			</li>
			<li>
				<Link to="/login">3.3. Login</Link>
			</li>
			<li>
				<Link to="/ternary">4.1. Ternary</Link>
			</li>
			<li>
				<Link to="/update">4.2. Update</Link>
			</li>
			<li>
				<Link to="/students">5.1. Students</Link>
			</li>
			<li>
				<Link to="/student-manager">5.2. StudentManager</Link>
			</li>
			<li>
				<Link to="/counter-effect">6.1. CounterEffect</Link>
			</li>
			<li>
				<Link to="/title">6.2. Title</Link>
			</li>
			<li>
				<Link to="/countdown">6.3. Countdown</Link>
			</li>
			<li>
				<Link to="/comment">7.1. Comment</Link>
			</li>
			<li>
				<Link to="/comments">7.2. Comments</Link>
			</li>
		</ul>
	</>
);

export default Menu;
