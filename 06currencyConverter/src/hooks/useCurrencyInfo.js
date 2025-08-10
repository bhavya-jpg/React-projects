import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  // Fallback data agar API fail ho jaye
  const fallbackData = {
    usd: {
      inr: 83.12,
      eur: 0.92,
      gbp: 0.79,
      jpy: 148.56,
      aud: 1.52,
      cad: 1.35,
      chf: 0.87,
      cny: 7.23,
      usd: 1
    },
    inr: {
      usd: 0.012,
      eur: 0.011,
      gbp: 0.0095,
      jpy: 1.79,
      aud: 0.018,
      cad: 0.016,
      chf: 0.010,
      cny: 0.087,
      inr: 1
    },
    eur: {
      usd: 1.09,
      inr: 90.35,
      gbp: 0.86,
      jpy: 161.48,
      aud: 1.65,
      cad: 1.47,
      chf: 0.95,
      cny: 7.86,
      eur: 1
    }
  };

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res && res[currency]) {
          setData(res[currency]);
        } else {
          // Agar API se data nahi mila to fallback data use karo
          setData(fallbackData[currency] || {});
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
        // API fail hone par fallback data use karo
        setData(fallbackData[currency] || {});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
