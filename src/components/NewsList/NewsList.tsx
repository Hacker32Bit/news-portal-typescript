import React from "react";
import styles from "./NewsList.module.css"
import NewsCard from "../NewsCard";

interface NewsListProps {
    news: string[]
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
    return (
        <div>
            <NewsCard
            id={2}
            title="First news"
            content="First news content text"
            image="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
            publishDate={(new Date()).toDateString()}
            />
        </div>
    )
}

export default NewsList