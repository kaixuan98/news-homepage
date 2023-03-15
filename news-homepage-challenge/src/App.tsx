import React from 'react';
import NavBar from './components/NavBar';
import PageBody from './components/PageBody';
import './App.scss'; 

function App() {
  return (
    // put a layout on the app so the component is gonna inherit the App
    <div className="App">
      <NavBar/>
      <PageBody/>
    </div>
  );
}

export default App;
