import './App.css';
import MovieList from "./components/MovieList/MovieList";
import Nav from './components/Nav/Nav';
import {MovieProvider} from './components/MovieContext/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
