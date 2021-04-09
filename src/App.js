import logo from './logo.svg';
import Home from './cmp/Home';
import About from './cmp/About';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*const api = {
  key:"629d9ac908eaef1486c2157985089f2a",
  base:"https://api.openweathermap.org/data/2.5",}*/

function App() {

  /*const [query, setQuery] = useState('');
        const [weather, setWeather] = useState({});

        const search = evt => {
            if (evt.key === 'Enter'){
                fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then( res => res.json())
                .then(result => {setWeather(result);
                       setQuery('')});
                       console.log(result);
            }
        }*/
  return (
    <div className="App">
      
      <Router>
        <Link to="home" className="homeposition">About Me</Link>
        <Link to="about" className="homeposition">My Town</Link>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
