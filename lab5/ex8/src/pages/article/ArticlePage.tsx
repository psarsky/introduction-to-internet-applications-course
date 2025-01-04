import { Params, useParams } from "react-router-dom";

const ArticlePage = () => {
    const params: Readonly<Params<string>> = useParams();
    return (
        <div>
            {params.id}
        </div>
    );
};

export default ArticlePage;