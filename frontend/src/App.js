import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import AppContainer from "./styled/AppContainer";
import axios from "axios";


const loadStockData = async () => {
  const options = {
    method: 'GET',
    url: 'https://stock-market-data.p.rapidapi.com/market/index/s-and-p-five-hundred',
    headers: {
      'X-RapidAPI-Key': '369d29ce3cmshde2e37bdcfaae68p135cb9jsn9bf43181d106',
      'X-RapidAPI-Host': 'stock-market-data.p.rapidapi.com'
    }
  };
  
/*   axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  }); */
useEffect (() => {
 let interval = setInterval(() => {
   const response = await axios(options);
 }, 5000);

  return () => {
   clearInterval(interval);
 };
 }, []);


function App() {
  const [sandp, setSandp] = useState({});
  
  useEffect(() => {
    loadStockData().then(res => {
      setSandp(res)
    })
  })

  return (
    <AppContainer>
      <Header caption="Socialcode" />
      <Content sandp={sandp} />
      <Footer caption="Socialcode @ Codingschule, 2022" />
    </AppContainer>
  );
}

export default App;
