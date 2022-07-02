import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import AppContainer from "./styled/AppContainer";

function App() {
  return (
    <AppContainer>
      <Header caption="Socialcode" />
      <Content />
      <Footer caption="Socialcode @ Codingschule, 2022" />
    </AppContainer>
  );
}

export default App;
