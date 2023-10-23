import React from "react";
import styles from "./NewsCard.module.css"

interface card {
    id: number;
    title: string;
    text: string;
    date: string;
    image: string;
}

export default function NewsCard({id, title, text, date, image}: card) {
    return(
        <div className={styles.card}>
            <img src={image} alt="img"></img>
            <h1>{title}</h1>
            <p>{text}</p>
            <button>Read more</button>
            <span>{date}</span>
        </div>
    )
}
