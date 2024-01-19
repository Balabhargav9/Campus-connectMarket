import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Contact from './Contact';
import Cards from './Cards';
import PendingData from './PendingData';
import Ex from './Ex';
import Check from './Contact';
import Profile from './Profile';



function App() {
  return (
    <Routes>
<Route path="/" element={<Login/>}/>
<Route path="/cards" element={<Cards/>}/>
<Route path="/signup" element={<SignUp/>} />
<Route path="/home" element={<Home/>} />
<Route path="/pendingdata" element={<PendingData/>} />
<Route path="/ex" element={<Ex/>} />
<Route path="/check" element={<Check/>} />
<Route path="/Contact" element={<Contact/>}/>
<Route path="/profile" element={<Profile/>} />
    </Routes>
    
  );
}

export default App;
