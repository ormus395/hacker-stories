import React from "react";
import logo from "./logo.svg";
import "./App.css";

const welcome = {
  greeting: "Hey",
  title: "React",
};

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchState, setSearchState] = React.useState("");

  const handleSearch = (event) => {
    setSearchState(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchState.toLowerCase())
  );

  console.log(searchedStories);
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} searchValue={searchState} />
      <p>Searching for: {searchState}</p>
      <hr />
      <ul>
        <List list={searchedStories} />
      </ul>
    </div>
  );
};

const Search = ({ onSearch, searchValue }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input onChange={onSearch} id="search" type="text" value={searchValue} />
  </div>
);

const List = ({ list }) =>
  list.map((item) => <Item key={item.objectID} {...item} />);

const Item = ({ url, title, author, num_comments, points }) => (
  <li>
    <h3>
      <a href={url}>{title}</a>
    </h3>
    <span>{author} </span>
    <span>{num_comments} </span>
    <span>{points}</span>
  </li>
);

export default App;
