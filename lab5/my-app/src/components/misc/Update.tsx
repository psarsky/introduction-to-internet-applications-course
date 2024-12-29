import { useState } from "react";

const Update = () => {
	const [product, setProduct] = useState({
		name: "Tomato",
		price: 50,
	});

	return (
		<>
			<div>
				Product: {product.name}
				<br />
				Price: {product.price}
			</div>
			<br />
			<button
				onClick={() => {
					setProduct((prevState) => ({ ...prevState, price: 100 }));
				}}
			>
				Update price
			</button>
		</>
	);
};

export default Update;
