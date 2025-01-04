import "./Add.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Article } from "../../components/interfaces";

const Add = () => {
	const [title, setTitle] = useState<string>("");
	const [body, setBody] = useState<string>("");
	const navigate = useNavigate();

	const submitArticle = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!title || !body) {
			alert("Fields cannot be empty!");
			return;
		}

		const storage: string | null = localStorage.getItem("articles");
		const articles: Article[] = storage ? JSON.parse(storage) : [];
		let id: number;

		if (articles.length == 0) id = 1;
		else id = articles[0].id + 1;

		articles.unshift({
			id,
			title,
			body,
		});

		localStorage.setItem("articles", JSON.stringify(articles));

		setTitle("");
		setBody("");
		navigate("/blog");
	};

	return (
		<form onSubmit={submitArticle}>
			<label htmlFor="title">Title:</label>
			<input
				id="title"
				type="text"
				placeholder="Your title"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setTitle(e.target.value);
				}}
			/>
			<label htmlFor="body">Body:</label>
			<textarea
				id="body"
				placeholder="Your article"
				rows={10}
				maxLength={3000}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
					setBody(e.target.value);
				}}
			/>
			<div className="counter">{body.length}/3000</div>
			<input className="submit" type="submit" value="Submit" />
		</form>
	);
};

export default Add;
