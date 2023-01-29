import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCartPlus,faBars } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from 'react';
import { Routes,Route,Link,useNavigate,Outlet, useParams, json } from 'react-router-dom';
import Main from './Main.js'


function App() {
  const [ hegiht, setHeight ] = useState();
  const[ block, setBlock ] = useState();
  const[ toggle, setToggle ]= useState(true);
  const [scrollEvent , setScrollEvent] = useState('') 
  const onScroll = ()=>{
        if (window.scrollY > 60){
            setScrollEvent('navbar-active')
        }else{
            setScrollEvent('')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',onScroll);
    })

  return (
    <div className="App">
      <nav className={`navbar ${scrollEvent}`}  style={hegiht}>
        <div className='navbar__logo'>
          <h4>Art-Market</h4>
          <FontAwesomeIcon icon="fa-thin fa-bars" />
        </div>
        <ul className={`navbar__menu ${block}`} >
          <li >Store</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className={`navbar__icons ${block}`}  >
          <li><FontAwesomeIcon icon={faUser}/></li>
          <li><FontAwesomeIcon icon={faCartPlus}/></li>
        </ul>
      </nav>
      <a href='#' className='navbar__toogleBtn' onClick={()=>{
          setToggle(!toggle);
          if(toggle == false){
            setBlock('active');
            setHeight({height : '500px'})
          }else{
            setBlock();
            setHeight();
          }
      }}>
        <FontAwesomeIcon icon={faBars}  />
      </a>

     

      <Routes>
      </Routes>

    

    </div>
  );
}

export default App;
