import { Typography } from '@material-ui/core';
import './App.css';
import Card1 from './components/Card1/Card1';
import Card2 from './components/Card2/Card2';
// 0721cd6e70fa645c25ea7c923611d6e4

import Layout from './components/hoc/Layout/Layout';
import Search from "./components/Search/Search";


function App() {
  const img = "https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg"
  const img2 = "https://static.toiimg.com/photo/msid-61737605,width-96,height-65.cms"
  const title="First title"
  return (
    <div className="App">
      <Layout>
        {/* <Search /> */}
        <div className="cardContainer" style={{marginBottom: '70px'}}>
          <Card1 img={img} title={title} />
          <Card1 img={img} title={title} />
          <Card1 img={img} title={title} />
          <Card1 img={img} title={title} />
        </div>
        <Typography color="textPrimary" variant='h5'>
          Collections
        </Typography>
        <Typography color="textPrimary" variant='p' component='p'>
          Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends.
        </Typography>
        <div className="cardContainer">
          <Card2 img={img2} />
          <Card2 img={img2} />
          <Card2 img={img2} />
          <Card2 img={img2} />
        </div>
      </Layout>

    </div>
  );
}

export default App;
