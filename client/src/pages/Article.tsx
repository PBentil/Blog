import { useParams } from "react-router-dom";
import articles from "./article-content";

//components 
import ArticlesComponent from "../components/Articles";


//pages 
import NotFound from "./NotFound";

const Article = () => {
    const { name } = useParams();
    const article = articles.find((article) => article.name === name);
    if(!article) return <NotFound />
    // Filter out the current article from other articles
    const otherArticles = articles.filter(article => article.name !== name);
    
    
    return (
        <>
            <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
                {article?.title}
            </h1>
            {article?.content.map((paragraph, index) => (
                <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
                    {paragraph}
                </p>
            ))}
            <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">Other Articles</h1>
            <div className="flex flex-wrap -m-4">
                <ArticlesComponent articles={otherArticles} />
            </div>
        </>
    )
}

export default Article;
