import "./ArticlePage.css"
import { Link, useParams } from "react-router-dom";
import { Article } from "../../components/interfaces";
import ArticleView from "../../components/article/ArticleView";

const ArticlePage = () => {
	const articleID: number = Number(useParams().id);
	const storage: string | null = localStorage.getItem("articles");
	const articles: Article[] = storage ? JSON.parse(storage) : [];

    if (articleID < 1 || articleID > articles.length) {
        return (
			<div className="articleContainer">
                <h1>Article not found.</h1>
				<Link className="link" to="/blog">
					Return to blog
				</Link>
			</div>
		);
    }

	const { id, title, body } = articles.filter((article: Article) => article.id === articleID)[0];

	return (
		<div className="articleContainer">
			<ArticleView id={id} title={title} body={body} />
			<Link className="link" to="/blog">
				Return to blog
			</Link>
		</div>
	);
};

export default ArticlePage;
