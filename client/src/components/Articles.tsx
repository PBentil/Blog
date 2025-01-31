import { Link } from "react-router-dom";

type article = {
    name: string;
    title: string;
    thumbnail: string;
    content: string[];
};

const ArticlesComponent = ({ articles }: { articles: article[] }) => {
    return (
        <>
            {/* Iterate through each article in the articles array */}
            {articles.map((article, index) => (
                <div key={index} className="p-4 md:w-1/2">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Link to={`/article/${article.name}`}> <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={article.thumbnail} alt={article.title} /> </Link>
                        <div className="p-6">
                            <Link to={`/article/${article.name}`}>
                                <h2 className="tracking-widest title-font font-bold mb-1">{article.title}</h2>
                            </Link>
                            <p className="leading-relaxed mb-3">
                                {/* Get the first paragraph of content (index 0) and extract the first 115 characters */}
                                {/* This creates a preview/excerpt of the article content */}
                                {article.content[0].substring(0, 115)}
                            </p>
                            <div className="flex item-center flex-wrap">
                                <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/article/${article.name}`}>Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ArticlesComponent;