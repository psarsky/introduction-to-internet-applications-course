import "./ArticleList.css";
import { Link } from "react-router-dom";
import { Article } from "../interfaces";

const ArticleListView = (props: Article) => (
	<div id={String(props.id)} className="articleListView">
		<div className="infoContainer">
			<div className="title">{props.title}</div>
			<div className="id">Article ID: {props.id}</div>
		</div>
		<hr />
		<div className="body">
			{props.body.slice(0, 180) + (props.body.length > 180 ? "... " : " ")}
			<Link className="link" to={"/article/" + String(props.id)}>
				Read the article
			</Link>
		</div>
	</div>
);

export default ArticleListView;
