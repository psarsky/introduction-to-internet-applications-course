import Product from "./Product";

const NewBasket = () => {
	const products: string[] = ["Apple", "Pear", "Orange", "Banana", "Watermelon"];

	return (
		<div className="basket">
			{products.map((product: string) => (
				<Product name={product} />
			))}
		</div>
	);
};

export default NewBasket;
