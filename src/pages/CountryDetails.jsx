import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CountryDetails = () => {

  const {name} =useParams()
  const [CountryData, setCountryData] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCountryData(data[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center mt-10">
  <div className="text-center p-6 border rounded-xl shadow-lg w-[400px]">
    
    <h2 className="text-2xl font-bold mb-4">
      {CountryData?.name?.common}
    </h2>

    <img 
      src={CountryData?.flags?.svg} 
      alt="" 
      className="w-full h-40 object-contain mb-4"
    />

    <p><b>Capital:</b> {CountryData?.capital?.[0]}</p>
    <p><b>Region:</b> {CountryData?.region}</p>
    <p><b>Population:</b> {CountryData?.population}</p>

  </div>
</div>
  )


}

export default CountryDetails