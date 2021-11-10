import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart , setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then ( data => {
      console.log(data)
      setCountries(data)
    })
  }, []);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart);
  }

  return (
    <div className="App">
    <div className="header-area">
    <h2>Total Country: {countries.length} </h2>
      <Cart cart={cart} ></Cart>
    </div>
      <ul>
        {
          countries.map(country => <Country handleAddCountry={handleAddCountry} key={country.name.common} country = {country}></Country> )
        }
      </ul>
    </div>
  );
}

export default App;
