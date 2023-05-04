import { useState } from 'react'
import Navbar from './Navbar'
import MainContainer from './MainContainer';
import FooterContainer from './FooterContainer';
import './App.css';



export default function App() {
  return (
    <div className='flex flex-col h-screen .MainApp'>
      <Navbar/>
      <MainContainer/>
      <FooterContainer/>
    </div>
 
  );
}