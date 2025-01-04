import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Menu from "./components/menu/Menu";

// 1.1.
import Basket from "./components/basket/Basket";
// 1.2.
import NewBasket from "./components/basket/NewBasket";
// 2.1.
import Counter from "./components/counters/Counter";
// 2.2.
import NewCounter from "./components/counters/NewCounter";
// 3.1.
import Form from "./components/forms/Form";
// 3.2.
import Password from "./components/forms/Password";
// 3.3.
import Login from "./components/forms/Login";
// 4.1.
import Ternary from "./components/misc/Ternary";
// 4.2.
import Update from "./components/misc/Update";
// 5.1.
import Students from "./components/students/Students";
// 5.2.
import StudentManager from "./components/students/StudentManager";
// 6.1.
import CounterEffect from "./components/effects/CounterEffect";
// 6.2.
import Title from "./components/effects/Title";
// 6.3.
import Countdown from "./components/effects/Countdown";
// 7.1.
import Comment from "./components/products/Comment";
// 7.2.
import Comments from "./components/products/Comments";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Menu />} />
					<Route
						path="/basket"
						element={
							<>
								<Basket />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/new-basket"
						element={
							<>
								<NewBasket />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/counter"
						element={
							<>
								<Counter />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/new-counter"
						element={
							<>
								<NewCounter />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/form"
						element={
							<>
								<Form />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/password"
						element={
							<>
								<Password />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/login"
						element={
							<>
								<Login />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/ternary"
						element={
							<>
								<Ternary />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/update"
						element={
							<>
								<Update />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/students"
						element={
							<>
								<Students />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/student-manager"
						element={
							<>
								<StudentManager />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/counter-effect"
						element={
							<>
								<CounterEffect />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/title"
						element={
							<>
								<Title />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/countdown"
						element={
							<>
								<Countdown />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/comment"
						element={
							<>
								<Comment
									id={1}
									body="Annuntio vobis gaudium magnum: Habemus Papam! Eminentissimum ac reverendissimum Dominum, Dominum Carolum Sanctæ Romanæ Ecclesiæ Cardinalem Wojtyła, qui sibi nomen imposuit Ioannis Pauli"
									postId={2137}
									likes={420}
									user={{
										id: 1,
										username: "jp2gmd",
										fullName: "Karol Wojtyła",
									}}
								/>
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
					<Route
						path="/comments"
						element={
							<>
								<Comments />
								<footer>
									<Link to="/">Back to menu</Link>
								</footer>
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
