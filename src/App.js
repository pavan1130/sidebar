import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import Dashboard from './components/dashboard.jsx';
import ServiceRiskReport from './components/ServiceRiskReport.jsx';
import Notifications from './components/Notifications.jsx';
import Report from './components/Report.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/service-risk-report" component={ServiceRiskReport} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/report" component={Report} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
