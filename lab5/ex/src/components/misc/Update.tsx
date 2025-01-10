import { useState } from "react";

interface Product {
	name: string;
	price: number;
}

const Update = () => {
	const [product, setProduct] = useState<Product>({
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
					setProduct((prevState: Product) => ({ ...prevState, price: 100 }));
				}}
			>
				Update price
			</button>
		</>
	);
};

export default Update;
