import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Loading from "../components/Loading.jsx"



const CountryList = () => {
  const [CountryData, setCountryDatas] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCountryDatas(data);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }


  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Countries</h1>
      <div className="card-container mb-4 grid grid-cols-4 gap-6">
        {CountryData.map((country) => (
          <Link to={`/country/${country.name.common}`} key={country.cca3} className="card p-4 border rounded-xl shadow-md">
            <img className="w-full h-32 object-contain"
              src={country.flags.svg}
              alt={country.name.common} />

            <h2>{country.name.common}</h2>

          </Link>
        ))}

      </div>
    </div>

  )
}

export default CountryList