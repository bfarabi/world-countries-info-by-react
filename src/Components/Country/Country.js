import React from 'react';
import "./Country.css";

const Country = (props) => {
    const {name, population, region, flags, capital} = props.country ;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country-information">
            
           <div className="flag-part">
                <img src={flags.png} alt="" />
           </div>
           <div className="information-part">
                <h2> Country name: {name.common}</h2>
                <p> Population: {population}</p>
                <h4>Capital: {capital}</h4>
                <p> <small>Region: {region}</small></p>
                 <button 
                 style={{cursor:'pointer'}}
                  onClick={()=> handleAddCountry(props.country)} >Add Country</button>
           </div>
        </div>
    );
};

export default Country;