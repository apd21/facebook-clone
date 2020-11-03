import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import NewsFeed from './components/NewsFeed/NewsFeed';



const App = () => {

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <NewsFeed />
      </div>
    </div>
  )
}

export default App;


//9EfaMvmsiyTwfbFk