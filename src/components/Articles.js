import React from "react";
import { Link, Outlet } from "react-router-dom";
import Image from "./Image";

function Articles({ articles }) {

  return (
    <div className="container">
      {articles.map(article =>
        <div className="article" key={article.id}>
          <Image imgUrl={article.img} className={'newsImage'} />

          < Link to={`/detail/${article.id}`}
            state={{ id: article.id }}
            className="headerLink">
            {article.header}
          </Link>

          <p className="articleLink">{article.link}</p>
        </div>)}
      <Outlet />
    </div>
  )
}

export default Articles