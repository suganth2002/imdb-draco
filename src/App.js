

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Upcoming } from './pages/upcoming';
import HomePage from './pages/homepage';
import { TopRated } from './pages/toprated';
import Nav from './components/nav';
import { MovieDesc } from "./pages/MovieDesc";
import SearchMovies from "./components/search/SearchMovies";



function App() {
  return (
    
    
    <Router>
    <>
    <Nav />
    </>
        <Routes>
        <Route path="/" element={ <HomePage /> } />
          <Route path="/popular" element={ <HomePage /> } />
          <Route path="/toprated" element={ <TopRated /> } />
          <Route path="/upcoming" element={ <Upcoming />} />
          <Route path="/movie" element={<SearchMovies />} />
          <Route path="/movie/:id" element={<MovieDesc />} />

        </Routes>
      </Router>
    
  );
}

export default App;



