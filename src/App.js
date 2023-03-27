import './App.css';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Hero from './components/Hero/Hero';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/* <AuthContextProvider>
          <Router>
            <Routes>
              <Route exact path="/authorization" element={<Authorization />} />
              <Route exact path="/dashboard" element={<Protected><Dashboard /></Protected>} />
              <Route exact path="/taskpage/:id" element={<TaskPage />} />
              <Route exact path="/profile" element={<UserProfile />} />
              <Route exact path="/rewards" element={<UserRewards />} />
              <Route exact path="/statistic" element={<UserStatistic />} />
              <Route exact path="/addtask" element={<AddTask />} />
              <Route exact path="/donetasks" element={<DoneTasks />} />
              <Route exact path="/donetask/:id" element={<DoneTaskPage />} />
              <Route path="*" element={<Navigate to="/authorization" replace />} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
          </Router>
        </AuthContextProvider> */}
        <Header />
        <Hero />
        <Banner />
        <Features />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;
