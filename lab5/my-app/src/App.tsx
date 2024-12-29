import "./App.css";
// 1.1.
// import Basket from "./components/basket/Basket";
// 1.2.
// import NewBasket from "./components/basket/NewBasket";
// 2.1.
// import Counter from "./components/counters/Counter";
// 2.2.
import NewCounter from "./components/counters/NewCounter";

function App() {
	return (
		<div className="App">
			{/*
            1.1. <Basket />
            1.2. <NewBasket />
            2.1. <Counter />
            2.2. <NewCounter />
            */}
			<NewCounter />
		</div>
	);
}

export default App;
