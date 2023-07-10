//TODO: Resolve the error with the nav bar

import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import NoPageFounded from "./components/NoPageFounded";

function App() {
  const [searchResult, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");

  const Path = ["/", "/about", "/search", "/movie/:id"];

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjhmZjBjMTM5OGI1YjNhZGM1YTc4N2IwNzk0ZmE3MiIsInN1YiI6IjY0MzU2NDUxYWY0MzI0MDA3NzYxM2NkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MzuyOJW9e1Sok2m8MNW3msWXbqbIoXM4vFaLB7pmXRo",
      },
    };

    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);
  return (
    <>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResult} />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<NoPageFounded keyword={Path} />} />
        <Route path="/" element={<NoPageFounded />} />
        <Route path="/" element={<MovieView />} />
      </Routes>
    </>
  );
}

export default App;
