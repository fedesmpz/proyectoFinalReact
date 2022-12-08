
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'


function App() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className="align">
        <ItemListContainer src="./Assets/aventurerosAlTren.jpg" title="Aventureros Al Tren" text="Un juego para viajar"/>        
        <ItemListContainer src="./Assets/aventurerosAlTren.jpg" title="Aventureros Al Tren" text="Un juego para viajar"/>
        <ItemListContainer src="./Assets/aventurerosAlTren.jpg" title="Aventureros Al Tren" text="Un juego para viajar"/>
      </div>
      <div className="align">
        <ItemListContainer src="./Assets/aventurerosAlTren.jpg" title="Aventureros Al Tren" text="Un juego para viajar"/>        
        <ItemListContainer src="./Assets/aventurerosAlTren.jpg" title="Aventureros Al Tren" text="Un juego para viajar"/>
        <ItemListContainer src="./Assets/aventurerosAlTren.jpg" title="Aventureros Al Tren" text="Un juego para viajar"/>
      </div>
    </div>
  );
}

export default App;
