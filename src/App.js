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

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <Search onChangeHandler={handleChange} />
      <hr />
      <ul>
        <List list={stories} />
      </ul>
    </div>
  );
};

const Search = ({ onChangeHandler }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input onChange={onChangeHandler} id="search" type="text" />
  </div>
);

const List = ({ list }) =>
  list.map((item) => (
    <li key={item.objectID}>
      <h3>
        <a href={item.url}>{item.title}</a>
      </h3>
      <span>{item.author} </span>
      <span>{item.num_comments} </span>
      <span>{item.points}</span>
    </li>
  ));

export default App;
