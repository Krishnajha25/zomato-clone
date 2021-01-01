import './App.css';
import Card1 from './components/Card1/Card1';
// 0721cd6e70fa645c25ea7c923611d6e4

import Layout from './components/hoc/Layout/Layout';
import Search from "./components/Search/Search";


function App() {
  const img = "https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg"
  const title="First title"
  return (
    <div className="App">
      <h1>Zomato-clone</h1>
      <div className="cardContainer">
        <Card1 img={img} title={title} />
        <Card1 img={img} title={title} />
        <Card1 img={img} title={title} />
        <Card1 img={img} title={title} />
      </div>

      <Layout>
        <Search />
      </Layout>

    </div>
  );
}

export default App;
