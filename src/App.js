import './App.css';
import BookCard from './components/BookCard'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">
      <h1>Book Store</h1>
      <BookCard />
      <SearchBar />
    </div>
  );
}

export default App;
