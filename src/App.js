import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BookList from './Components/BookList';
import HorrorBooks from './Data/HorrorBooks.json'
import MyNav from './Components2/MyNav';
import Welcome from './Components2/Welcome';
import MyFooter from './Components2/MyFooter';

function App() {
  return (
    <div className="App">
      <MyNav title="BOOK STORE"/>
      <Welcome title="Welcome!" text="You can find here Best Horror Novels of All Time!"/>
      <BookList books={HorrorBooks} />
      <MyFooter storeName="BOOK STORE" adress="@book-store.com" button="shop here" />
    </div>
  );
}

export default App;
