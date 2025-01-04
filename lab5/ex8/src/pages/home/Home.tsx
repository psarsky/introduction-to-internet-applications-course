import "./Home.css";
import { Link } from "react-router-dom";
import { Article } from "../../components/interfaces";

const Home = () => {
    const storage: string | null = localStorage.getItem("articles");

    if (!storage) {
		fetch("https://dummyjson.com/posts")
			.then((res: Response) => res.json())
			.then((data: { posts: Article[]; total: number; skip: number; limit: number }) => {
				const articles: Article[] = data.posts;
				articles.reverse();
				localStorage.setItem("articles", JSON.stringify(articles));
			});
	}

	return (
		<div className="container">
			<div className="homePage">
				<h1>Welcome!</h1>
				<h2>
					You will find some interesting articles on the{" "}
					<Link className="link" to="/blog">
						blog page
					</Link>
					.
				</h2>
			</div>
		</div>
	);
};

export default Home;
