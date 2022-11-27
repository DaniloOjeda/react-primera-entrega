import logo from './logo.svg';
import './App.css';
import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/NavBar/CartWidget";


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <CartWidget/>
      
      <p>Bienvenidos a Mundo Pesca ReactJS </p>
        <Button titulo="clickeame"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          articulos de pesca
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/*  Props */}
          <Button titulo="mundo pesca" />
        </a>
        <Button titulo="articulos"/>
        <ItemListContainer
          price={34000}
          title="Reel rotativo"
          description="Reel rotativo Abu Garcia Black Max BMAX3 derecho color negro"
          imgurl="https://http2.mlstatic.com/D_NQ_NP_693159-MLA45919119413_052021-O.webps"  
          />
       
       <ItemListContainer
          price={26000}
          title="Reel rotativo"
          description="Reel rotativo Abu Garcia Black Max "
          imgurl="https://http2.mlstatic.com/D_NQ_NP_693159-MLA45919119413_052021-O.webps"  
          />
        
        
        

      </header>
    </div>
  );
}

export default App;
