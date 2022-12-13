import React from "react";
import { useLocation } from "react-router";
import Image from "./Image";

import { useDispatch } from 'react-redux';
import { addComment } from "../store/articlesSlice";


function DetailPage(props) {

    const location = useLocation()
    const { id } = location.state

    const dispatch = useDispatch();

    return (
        <>
            {props.articles.filter(article => article.id === id)
                .map(article => <div className="detailContainer" key={article.id}>
                    <h1 className="detailHeader">{article.header}</h1>
                    <Image imgUrl={article.img} className={'newsImageDetail'}/>
                    <section className="detailBody">
                        <div>                            
                        {article.body}
                        </div>
                        </section>
                    <section className="commentSection">
                        <div className="textareaSection">
                            <h3>{article.commentHeader}</h3>
                            <textarea
                                value={article.commentBody}
                                onChange={(e) => dispatch(addComment({
                                    value: e.target.value,
                                    id: article.id,
                                    header: article.header,
                                    body: article.body,
                                    link: article.link,
                                    img: article.img
                                })
                                )}
                            ></textarea>
                        </div>
                    </section>
                </div>)}
        </>
    )
}

export default DetailPage