import { ArticleAttr } from "../../services/city/types";
import { Article } from "../article";
import './index.css'

type NewsProps = {
  articles: ArticleAttr[]
}

export const News = ({articles}:NewsProps) => {
  return (
    <div className="container-news">
     {articles.map((article, index) => {
        return ( 
         <div key={index}>
           <Article article={article} />
         </div>
        );
      })}
    </div>
  )
}
