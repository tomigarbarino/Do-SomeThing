import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import SignUp from './screens/SignUp/SignUp';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import ActivitiesToDo from './screens/ActivitiesToDo/ActivitiesToDo';
import Landing from './screens/Landing/Landing.jsx';
import BackgroundCircles from './components/BackgroundCircles/BackgroundCircles';

const App = () => {
  return (
    <AppProvider>
      <Router>
      <BackgroundCircles />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activities" element={<ActivitiesToDo />} />
          <Route path="/" element={<Landing />} exact />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;