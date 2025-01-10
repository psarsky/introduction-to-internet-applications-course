import "./ArticleList.css";
import { Article } from "../interfaces";
import ArticleListView from "../../components/article-list/ArticleListView";

const ArticleList = () => {
	const storage: string | null = localStorage.getItem("articles");
	const articles: Article[] = storage ? JSON.parse(storage) : [];

	return (
		<div className="articleList">
			{articles.map((article: Article) => (
				<ArticleListView id={article.id} title={article.title} body={article.body} />
			))}
		</div>
	);
};

export default ArticleList;
