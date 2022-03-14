import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import { Mobile } from './Mobile';
import { Addmobile } from './Addmobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faAppleWhole, faCoffee, } from '@fortawesome/free-solid-svg-icons';
import './App.css';

export default function App() {
  
  return (
    <div className="App">
     <Router>
      <Nav/>
       <Switch>
         <Route exact path="/"><Home/></Route>
         <Route path="/mobile"><Mobile/></Route>
         <Route path="/addmobile"><Addmobile/></Route>
       </Switch>
     </Router>
    </div>
  );
}

function Home(){
  return(
    <div>
      <div className='arr'>
     <h1><FontAwesomeIcon icon={faAppleWhole}></FontAwesomeIcon> WELCOME TO APPLE WORLD <FontAwesomeIcon icon={faAppleWhole}></FontAwesomeIcon></h1>
     <h2>📳📳EXCITING OFFERES WAITING FOR YOU!!📳📳</h2>
     </div>
     <img src='https://i.ytimg.com/vi/1MaaiLo9z8Y/maxresdefault.jpg' alt='profile'></img>
    </div>
  )
}


