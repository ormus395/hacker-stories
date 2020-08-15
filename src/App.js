import React from "react";
import "./App.css";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const storiesReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "STORIES_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
      };
    case "STORIES_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "REMOVE_STORY":
      return {
        ...state,
        data: state.data.filter((story) => action.payload !== story.objectID),
      };
    case "STORIES_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      console.log("Something broke");
  }
};

const useSemiPersistanceState = (key, initialState = "") => {
  const [value, setvalue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  React.useEffect(() => {
    let random = Math.floor(Math.random() * 10);

    console.log(random);
  }, [value]);

  return [value, setvalue];
};

const App = () => {
  const [searchState, setSearchState] = useSemiPersistanceState(
    "search",
    "React"
  );

  const [state, dispatchStories] = React.useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  console.log(state);

  React.useEffect(() => {
    dispatchStories({ type: "STORIES_FETCH_INIT" });

    fetch(`${API_ENDPOINT}react`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        dispatchStories({
          type: "STORIES_FETCH_SUCCESS",
          payload: response.hits,
        });
      })
      .catch((err) => {
        dispatchStories({ type: "STORIES_FETCH_FAILURE" });
      });
  }, []);

  const handleRemoveStory = (objectID) => {
    dispatchStories({
      type: "REMOVE_STORY",
      payload: objectID,
    });
  };

  const handleSearch = (event) => {
    setSearchState(event.target.value);
  };

  const searchedStories = state.data.filter((story) =>
    story.title.toLowerCase().includes(searchState.toLowerCase())
  );

  let listContent = "Loading...";

  if (state.isError && !state.isLoading) {
    listContent = <p>An Error has occured.</p>;
  } else if (!state.isLoading && !state.isError) {
    listContent = (
      <ul>
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      </ul>
    );
  }
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        onInputChange={handleSearch}
        value={searchState}
        id="search"
        label="Search"
        type="text"
        isFocused={true}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <p>Searching for: {searchState}</p>
      <hr />
      {listContent}
    </div>
  );
};

const InputWithLabel = ({
  id,
  value,
  onInputChange,
  type,
  children,
  isFocused,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children} </label>
      <input
        ref={inputRef}
        onChange={onInputChange}
        id={id}
        type={type}
        value={value}
      />
    </>
  );
};
const List = ({ list, onRemoveItem }) =>
  list.map((item) => (
    <Item key={item.objectID} {...item} onRemoveItem={onRemoveItem} />
  ));

const Item = ({
  objectID,
  url,
  title,
  author,
  num_comments,
  points,
  onRemoveItem,
}) => {
  return (
    <li>
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <span>{author} </span>
      <span>{num_comments} </span>
      <span>{points}</span>
      <span>
        <button type="button" onClick={() => onRemoveItem(objectID)}>
          Dismiss
        </button>
      </span>
    </li>
  );
};
export default App;
