import React from 'react' // 
import {createRoot} from 'react-dom/client'//
import './style.css'
import Header from './Components/Header';
import MyComponents from './Components/MyComponents';
import Footer from './Components/Footer';
const root = document.getElementById("root")
createRoot(root).render(
 <div>
  <Header/>
  <div className='flex '>
  <MyComponents  title="Salma Mokhtaar"  desc="Coding Class" image="https://img.freepik.com/premium-photo/skilled-professional-executive-worker-afro-american-girl-posing_274222-22786.jpg?size=626&ext=jpg&ga=GA1.1.51471150.1675622090&semt=ais'" />
  <MyComponents title="Salma Mokhtaar"  desc="Coding Class"   image="https://img.freepik.com/premium-photo/skilled-professional-executive-worker-afro-american-girl-posing_274222-22786.jpg?size=626&ext=jpg&ga=GA1.1.51471150.1675622090&semt=ais'"/>
  <MyComponents title="Salma Mokhtaar"  desc="Coding Class"  image="https://img.freepik.com/premium-photo/skilled-professional-executive-worker-afro-american-girl-posing_274222-22786.jpg?size=626&ext=jpg&ga=GA1.1.51471150.1675622090&semt=ais'" />
  </div>
  <Footer/>
  </div>

) 






