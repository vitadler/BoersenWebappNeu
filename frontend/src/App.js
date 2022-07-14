import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import AppContainer from "./styled/AppContainer"

const loadStockData = async () => {
  const options = {
    method: 'GET',
    url: 'https://stock-market-data.p.rapidapi.com/market/index/s-and-p-five-hundred',
    headers: {
      'X-RapidAPI-Key': '369d29ce3cmshde2e37bdcfaae68p135cb9jsn9bf43181d106',
      'X-RapidAPI-Host': 'stock-market-data.p.rapidapi.com'
    }
  };
}

const testDaten = [
  {
    name: "adidas",
    kurs: "166,64",
    veraenderung: "-1.12%",
    kgv: "12",
    nettomarge: "6%",
    marktkapitalisierung: "30 Mrd. EUR"
  },
  {    
    name: "airbus",
    kurs: "166,65",
    veraenderung: "-1.13%",
    kgv: "13",
    nettomarge: "7%",
    marktkapitalisierung: "40 Mrd. EUR"
  },
  {
    name: "allianz",
    kurs: "166,66",
    veraenderung: "-1.14%",
    kgv: "14",
    nettomarge: "8%",
    marktkapitalisierung: "50 Mrd. EUR"
  }
]

function App() {

  const [stockData, setStockData] = useState(testDaten);

  useEffect (() => {
/*     let interval = setInterval(() => {
       const response = await axios(options);
     }, 5000);
    
      return () => {
       clearInterval(interval);
    }; */
  }, []);

  return (
    <AppContainer>
      <Header caption="Socialcode" />
      <Content stockData={stockData} />
      <Footer caption="Socialcode @ Codingschule, 2022" />
    </AppContainer>
  );
}

export default App;
