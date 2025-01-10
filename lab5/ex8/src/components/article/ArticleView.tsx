import "./ArticleView.css"
import { Article } from "../interfaces";

const ArticleView = (props: Article) => (
	<div className="articleView">
		<div className="articleInfoContainer">
			<div className="articleTitle">{props.title}</div>
			<div className="articleID">Article ID: {props.id}</div>
		</div>
		<hr />
		<div className="articleBody">{props.body}</div>
	</div>
);

export default ArticleView;
