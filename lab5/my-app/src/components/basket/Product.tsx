const Product = (props: { name: string }) => (
    <div className={`product ${props.name.toLowerCase()}`}>
        {props.name}
    </div>
);

export default Product;
