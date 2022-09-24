import React, {Fragment} from 'react';
import "./index.css";
import {Route, Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/Newmeetup';
import FavoritesPage from './pages/Favorites';

import Layout from './components/layout/Layout'

function App() {
  // localhost: 3000/
  // my-page.com/
  return (
    <Layout>
      <Fragment>
      < Routes>
        <Route path='/' exact element={<AllMeetupsPage/>}/>
        <Route path='/new-meetup' element={<NewMeetupPage />}/>       
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </ Routes>
      </Fragment>
    </Layout>
  )
}

export default App;