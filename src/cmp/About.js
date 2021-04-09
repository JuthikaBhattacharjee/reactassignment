import React, { Component } from 'react'
import './About.css';
/*const api = {
    key:"629d9ac908eaef1486c2157985089f2a",
    base:"https://api.openweathermap.org/data/2.5"
}*/

export default class About extends Component {
    render() {
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
            <div>
                <img src="logo192.png" className="imagedes"></img>
                <h2 className="inides1">I live in Halifax, NS</h2>
                <p className="initdes"> Halifax is situated in the east coast of Canada in the maritime province of Nova Scotia.</p>
                 
            </div>
        )
    }
}
