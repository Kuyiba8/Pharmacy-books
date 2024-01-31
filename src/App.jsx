import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import MyFooter from './components/MyFooter';
import Header from './components/Header';

function App() {

  

  return (
    <Router>
      <div>
        <MyNavbar />
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './components/Header';
// import MyNavbar from './components/MyNavbar'
// import Home from './pages/Home';
// import CategoryPage from './pages/CategoryPage';
// import MyFooter from './components/MyFooter';
// import Header from './components/Header';

// function App() {
//   return (
//     <Router>
//       <div>
//         <MyNavbar />
//         <Header />
//         {/* <Header /> */}
//         <Routes>
//           <Route path="/" exact element={<Home />} />
//           <Route path="/category/:categoryName" element={<CategoryPage />} />
//         </Routes>
//         <MyFooter />
//       </div>
//     </Router>
//   );
// }

// export default App;
