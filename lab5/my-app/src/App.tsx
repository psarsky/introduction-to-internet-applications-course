import "./App.css";
// 1.1.
// import Basket from "./components/basket/Basket";
// 1.2.
// import NewBasket from "./components/basket/NewBasket";
// 2.1.
// import Counter from "./components/counters/Counter";
// 2.2.
// import NewCounter from "./components/counters/NewCounter";
// 3.1.
// import Form from "./components/forms/Form";
// 3.2.
// import Password from "./components/forms/Password";
// 3.3.
// import Login from "./components/forms/Login";
// 4.1.
// import Ternary from "./components/misc/Ternary";
// 4.2.
// import Update from "./components/misc/Update";
// 5.1.
// import Students from "./components/students/Students";
// 5.2.
import StudentManager from "./components/students/StudentManager";

function App() {
	return (
		<div className="App">
			{/*
            1.1. <Basket />
            1.2. <NewBasket />
            2.1. <Counter />
            2.2. <NewCounter />
            3.1. <Form />
            3.2. <Password />
            3.3. <Login />
            4.1. <Ternary />
            4.2. <Update />
            5.1. <Students />
            5.2. <StudentManager />
            */}
			<StudentManager />
		</div>
	);
}

export default App;
