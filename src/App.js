
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import {Routes, Route} from 'react-router-dom';
import ProjectDetails from './pages/ProjectDetails';
import EditProject from './pages/EditProject';
import SignupPage from './pages/logPages/SignupPage';
import LoginPage from './pages/logPages/LoginPage';
import Private from './pages/Private/Private';
import Anon from './pages/Private/Anon';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route 
        path="/projects" 
        element={
          <Private>
           <ProjectsPage />
          </Private>
          }/> 
        <Route path="/projects/:id" element={ <ProjectDetails/>} />
        <Route path="/projects/edit/:id" element={ <EditProject/>} />
        <Route 
        path="/signup" 
        element={ 
          <Anon>
            <SignupPage/>
          </Anon>
        } />
        <Route 
        path="/login" 
        element={ 
          <Anon>
            <LoginPage/>
          </Anon>
        } />
      </Routes>
    </div>
  );
}

export default App;
