import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const url = `https://api.frankfurter.dev/v2/rates?base=${currency}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch currency rates");
        }

        return res.json();
      })
      .then((result) => {
        const normalizedRates = {};

        result.forEach((item) => {
          normalizedRates[item.quote.toLowerCase()] = item.rate;
        });

        // Base currency = 1
        normalizedRates[currency.toLowerCase()] = 1;

        setData(normalizedRates);
      })
      .catch((error) => {
        console.error("Frankfurter API Error:", error);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
