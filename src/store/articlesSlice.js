import { createSlice } from '@reduxjs/toolkit';

import { database } from '../firebase';
import { doc, setDoc } from "firebase/firestore";


const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: []
    },
    reducers: {
        addArticlesFirestore(state, action) {
            state.articles.push({
                id: action.payload.item.id,
                img: action.payload.item.img,
                header: action.payload.item.header,
                body: action.payload.item.body.replaceAll("_n", "\n"),
                link: action.payload.item.link,
                commentHeader: 'Experts Comment',
                commentBody: action.payload.item.commentBody.replaceAll("_n","\n"),
            })
        },
        addComment(state, action) {
            const comment = state.articles.find(article =>
                article.id === action.payload.id);
            console.log(action.payload.id)
            comment.commentBody = action.payload.value;

            setDoc(doc(database, 'News', action.payload.id), {
                id: action.payload.id,
                commentHeader: 'Experts Comment',
                commentBody: action.payload.value.replaceAll("\n", "_n"),
                header: action.payload.header,
                body: action.payload.body,
                link: action.payload.link,
                img: action.payload.img
            })
        }
    }
})

export const { addArticlesFirestore, addComment } = articlesSlice.actions;
export default articlesSlice.reducer;