import './App.css';
import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Articles from './components/Articles';
import DetailPage from './components/DetailPage';

import { Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { addArticlesFirestore } from './store/articlesSlice';

import { newsList } from './firebase';

function App() {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.articles);

  useEffect(() => {
    newsList
      .then(result => result.map(item => dispatch(addArticlesFirestore({ item }))
      ))
  }, [])


  return (
    <>
      <Routes>
        <Route path='/' element={<Nav />}>

          <Route index 
            element={<Articles
              articles={articles}
            />}
          />

          <Route path='/detail/:id'
            element={<DetailPage
              articles={articles}
            />}
          />

        </Route>
      </Routes>
    </>
  );
}

export default App;
