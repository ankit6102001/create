import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import { css } from '@emotion/react';
import  PropagateLoader  from 'react-spinners/PropagateLoader';


function App() {
  const[loading,setLoading]= useState(false);
  const override = css`
  display:block; 
  border-color:red;
  margin-top:20%;
  `;

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <div className="App">
      {
        loading? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40}/>
        :
        <>
        <Navbar/>
        <Header/>
        <Products/>
        <About/>
        <Contact/>
        </>
      }
      
    </div>
  );
}

export default App;
