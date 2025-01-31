import articles from "./article-content";
// import { Link } from "react-router-dom";

//components 
import ArticlesComponent from "../components/Articles";

const ArticlesList = () => {
    return (
        <>
            <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">Articles </h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                   <ArticlesComponent articles={articles} />
                </div>
            </div>
        </>
    )
}

export default ArticlesList;