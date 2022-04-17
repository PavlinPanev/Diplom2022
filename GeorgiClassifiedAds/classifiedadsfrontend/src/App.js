import './App.css';
import { useState } from 'react';
import Appbar from './components/Appbar';
import ClassifiedAds from './components/ClassifiedAds';
import { Button } from '@mui/material';


function App() {
  return (
    <div className="App">     
      <Appbar/>
      <ClassifiedAds/> 
    </div>
  );
}

export default App;
