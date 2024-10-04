import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Content } from './components/content/Content';
import { Header } from './components/header/Header';
function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Content />
      </main>
    </div>
  );
}

export default App;
