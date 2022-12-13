import React, { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

function Image({imgUrl, className}) {
    const [imageLink, setImageLink] = useState();

    useEffect(() => {
        getDownloadURL(ref(storage, imgUrl))
            .then((url) => {
                setImageLink(url)
            })

    }, []);

    return (
        <img src={imageLink} alt="news" className={className}/>
    )
}

export default Image