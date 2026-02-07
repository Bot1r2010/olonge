import './App.css';
import Fotter from './components/fotter/Fotter';
import { Navbar } from './components/navbar/Navbar';
import { How } from './components/ui/how/How';
import Intro from './components/ui/intro/Intro';
import Now from './components/ui/now/Now';
import { Shop } from './components/ui/shop/Shop';
import { You } from './components/ui/you/You';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Intro />
      <How />
      <Shop />
      <You />
      <Now />
      <Fotter />
    
    </div>
  );
}

export default App;
