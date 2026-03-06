
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import About from './components/About';
import React, { useState } from 'react';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// }from "react-router-dom";



function App() {
  const[mode, setMode]=useState('light'); // Wheather darkMode is enable or not 
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#10172b';
    document.title="TextUtils-DarkMode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    document.title="TextUtils-LightMode";
  }
}
  return (
  <> 
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <div className="container my-3">
  <TextForms heading="Enter The text to analyze below" mode={mode} />   
  </div>
</> 
  );
}
export default App;
