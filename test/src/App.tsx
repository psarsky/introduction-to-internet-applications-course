import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Author from "./pages/author/Author";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/author" element={<Author />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
