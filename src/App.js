import './App.css';

import Layout from './components/hoc/Layout/Layout';
import Search from "./components/Search/Search";


function App() {
  return (
    <div className="App">
      <Layout>
        <Search />
      </Layout>
    </div>
  );
}

export default App;
