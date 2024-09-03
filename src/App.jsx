import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import Services from './components/services';
import Formation from './components/formation';
import Contact from './components/contact';
import CV from './components/CV';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <AboutMe/>
      <Portfolio/>
      <Services/>
      <Formation/>
      <CV/>
      <Contact/>
    </div>
  );
}

export default App;
