import "./SubmitForm.css";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Article } from "../interfaces";

const SubmitForm = () => {
	const [title, setTitle] = useState<string>("");
	const [body, setBody] = useState<string>("");
	const navigate: NavigateFunction = useNavigate();

	const submitArticle = (e: React.FormEvent<HTMLFormElement>) => {
		const storage: string | null = localStorage.getItem("articles");
		const articles: Article[] = storage ? JSON.parse(storage) : [];
		let id: number;

		e.preventDefault();

		if (!title || !body) {
			alert("Fields cannot be empty!");
			return;
		}

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

export default SubmitForm;
