import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/menu/Sidebar';
import Interview from './pages/Interview';
import Averaga from './pages/Average';
import Target from './pages/Target';
import Collaborator from './pages/Collaborator';
import Criteria from './pages/Criteria';

export default function App() {
  return (
    <>
      <Sidebar />
      <div className="page-container">
        <Routes>
          <Route path="/dashboard" element = {<Dashboard />} />
          <Route path="/average" element = {<Averaga />} />
          <Route path="/target" element = {<Target />} />
          <Route path="/collaborator" element = {<Collaborator />} />
          <Route path="/interview" element = {<Interview />} />
          <Route path="/criteria" element = {<Criteria />} />
        </Routes>
      </div>
    </>
  );
}