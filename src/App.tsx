import { Employees, Departments } from './Pages';
import { Header, Navbar } from './Components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/scss/style.scss';
import './assets/scss/components.scss';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/departments" element={<Departments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
