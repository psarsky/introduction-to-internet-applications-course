import "./ArticleListView.css";
import { Article } from "../interfaces";
import { Link } from "react-router-dom";

const ArticleListView = (props: Article) => {
	const { id, title, body } = props;
	const bodyPeek = body.slice(0, 150) + "...";
	return (
		<div id={String(id)} className="articleListView">
			<div className="infoContainer">
				<div className="title">{title}</div>
				<div className="id">Article ID: {id}</div>
			</div>
            <hr />
			<div className="body">
				{bodyPeek}{" "}
				<Link className="link" to={"/article/" + String(id)}>
					Keep reading
				</Link>
			</div>
		</div>
	);
};

export default ArticleListView;
