import { useEffect, useState } from 'react';

export function useCountry() {
  const [countries, setCountries] = useState([]);

  // fetch countries for nationality selector with name, code, and flags
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flags')
      .then((res) => res.json())
      .then((data) => {
        const countryOptions = data
          .map((country) => ({
            value: country.cca2,
            label: country.name.common,
            flag: country?.flags?.svg,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setCountries(countryOptions);
      });
  }, []);
  return { countries };
}
