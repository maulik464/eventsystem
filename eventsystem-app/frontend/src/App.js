import { useState,useEffect } from 'react'
import axios from 'axios';
// import './App.css';
import NavBar from './NavBar';
import Banner from './Banner';
import Companydesc from './Companydesc';
import Destinationwedding from './Destinationwedding';
import Inquiryform from './Inquiryform';
import Ourservice from './Ourservice';
import Perfectvenue from './Perfectvenue';
import Ourblogs from './Ourblogs';
import Faqs from './Faqs';
import Footer from './Footer';
import Login from './Login';
import Registration from './Registration';

// Admin imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './adminpages/Dashboard';
import AdminNavBar from './adminpages/AdminNavBar';
import Mainbanner from './adminpages/Mainbanner';
import Adminlogin from './adminpages/Adminlogin';
import AdminPrivateAuth from './adminpages/AdminPrivateAuth';
import AdminRegistration from './adminpages/AdminRegistration';
import IntroEvents from './adminpages/IntroEvents';

function App() {
  const [data, setData] = useState('');

  const getData = async() =>{
    const res = await axios.get('http://localhost:5000')
    setData(res.data)
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="App">
      {/* {data} */}
      <Router>
        <Routes>
          {/* Home routes */}
          <Route path="/" element={<><NavBar /><Banner /><Companydesc /><Destinationwedding /><Inquiryform /><Ourservice /><Perfectvenue /><Ourblogs /><Faqs /><Footer /></>} />
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/Registration' element={<Registration/>}></Route>
          {/* Admin routes */}
          <Route path="/adminlogin" element={<Adminlogin/>}></Route>
          <Route path="/adminregistration" element={<AdminRegistration/>}></Route>
          <Route path="/admin" element={<><AdminPrivateAuth><Dashboard /><AdminNavBar /></AdminPrivateAuth></>}>
          </Route>
          <Route path="/admin/mainbanner" element={<><Dashboard /><AdminNavBar /><Mainbanner /></>}></Route>
          <Route path="/admin/introevents" element={<><Dashboard /><AdminNavBar /><IntroEvents/></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
