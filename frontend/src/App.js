import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/menu/Sidebar';
import Interview from './pages/Interview';
import Averaga from './pages/Average';
import Target from './pages/Target';
import Collaborator from './pages/Collaborator';
import Criteria from './pages/Criteria';
import InterviewForm from './pages/InterviewForm';
import InterviewTarget from './components/interviewForm/interviewTarget/InterviewTarget';
import InterviewScal from './components/interviewForm/interviewScal/InterviewScal';
import InterviewQuestion from './components/interviewForm/interviewQuestion/InterviewQuestion';
import InterviewComment from './components/interviewForm/interviewComment/InterviewComment';

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
          <Route path="/interview/interviewForm/:itrwID" element = {<InterviewForm />} >
            <Route path="target" element = {<InterviewTarget />} />
            <Route path="scal" element = {<InterviewScal />} />
            <Route path="question" element = {<InterviewQuestion />} />
            <Route path="comment" element = {<InterviewComment />} />
          </Route>
          <Route path="/criteria" element = {<Criteria />} />
        </Routes>
      </div>
    </>
  );
}