import jwt from "jsonwebtoken";

export const authToken = (req, res, next) => {
	const token = req.headers("authorization");
	if (!token) return res.status(401).send("Access denied");

	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send("Invalid token");
        req.user = user;
        next();
    });
};
