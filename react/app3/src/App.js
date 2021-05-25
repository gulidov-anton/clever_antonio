import Header from './header/Header';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import Article from './article/Article';
import Aside from './aside/Aside';
import Main from './main/Main';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="articleAppOne">
        <Article />
        <Article />
      </div>
      <div className="middleApp">
        <Aside />
        <Main />
        <Aside />
      </div>
      <div className="articleAppTwo">
        <Article />
        <Article />
        <Article />
      </div>
      <Footer />
    </div>
  );
}

export default App;
