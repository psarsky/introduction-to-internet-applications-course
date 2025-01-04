/*
Example comment:
<Comment
    id={1}
    body="Annuntio vobis gaudium magnum: Habemus Papam! Eminentissimum ac reverendissimum Dominum, Dominum Carolum Sanctæ Romanæ Ecclesiæ Cardinalem Wojtyła, qui sibi nomen imposuit Ioannis Pauli"
    postId={2137}
    likes={420}
    user={{ id: 1, username: "kochamdzieci", fullName: "Karol Wojtyła" }}
/>
*/

import { useState } from "react";
import { CommentInt } from "./interfaces.ts";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

const Comment = (props: CommentInt) => {
	const [likeCount, setLikeCount] = useState<number>(props.likes);
	const [upvoted, setUpvoted] = useState<boolean>(false);
	const [downvoted, setDownvoted] = useState<boolean>(false);

	const upvote = () => {
		if (upvoted) {
			setLikeCount((prevCount: number) => prevCount - 1);
			setUpvoted(false);
		} else {
			setLikeCount((prevCount: number) => prevCount + 1);
			setUpvoted(true);
			if (downvoted) {
				setLikeCount((prevCount: number) => prevCount + 1);
				setDownvoted(false);
			}
		}
	};

	const downvote = () => {
		if (downvoted) {
			setLikeCount((prevCount: number) => prevCount + 1);
			setDownvoted(false);
		} else {
			setLikeCount((prevCount: number) => prevCount - 1);
			setDownvoted(true);
			if (upvoted) {
				setLikeCount((prevCount: number) => prevCount - 1);
				setUpvoted(false);
			}
		}
	};

	return (
		<div className="comment">
			<div className="userInfo">
				<div className="fullName">{props.user.fullName}</div>
				<div className="username">@{props.user.username}</div>
			</div>
			<div className="body">{props.body}</div>
			<div className="likeContainer">
				<div className="voteButton" onClick={upvote}>
					<img
						className={upvoted ? "voteButtonClicked" : "voteButtonUnclicked"}
						src={up}
						alt="upvote"
					/>
				</div>
				<div className="voteButton" onClick={downvote}>
					<img
						className={downvoted ? "voteButtonClicked" : "voteButtonUnclicked"}
						src={down}
						alt="downvote"
					/>
				</div>
				<div className={upvoted || downvoted ? "likeCountClicked" : "likeCountUnclicked"}>
					{likeCount}
				</div>
			</div>
		</div>
	);
};

export default Comment;
