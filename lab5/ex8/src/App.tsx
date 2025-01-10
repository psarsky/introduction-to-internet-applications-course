import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Article from "./pages/article/ArticlePage";
import Add from "./pages/add/Add";
import NoPage from "./pages/nopage/NoPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blog" element={<Blog />} />
					<Route path="article/:id" element={<Article />} />
					<Route path="add" element={<Add />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
