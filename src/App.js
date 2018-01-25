import React from 'react';
import './css/App.css';
import Navigation from './components/Navigation';
import { Browse, Story, Admin, Create, LoadStory} from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={ Create }/>
    <Route path="/story" component={ Story }/>
    <Route path="/random" component={ Browse }/>
    <Route path="/admin" component={ Admin }/>
    <Route path="/stories/:id" component={ LoadStory }/> 
  </div>
);
export default App;