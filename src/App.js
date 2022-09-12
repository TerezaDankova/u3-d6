import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BookList from './Components/BookList';
import HorrorBooks from './Data/HorrorBooks.json'
import MyNav from './Components2/MyNav';
import Welcome from './Components2/Welcome';

function App() {
  return (
    <div className="App">
      <MyNav title="BOOK STORE"/>
      <Welcome title="Welcome!" text="You can find here Best Horror Novels of All Time!"/>
      <BookList books={HorrorBooks} />
   
    </div>
  );
}

export default App;
