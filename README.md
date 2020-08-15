# bookmark

    react fundamentals - Data Re-Fetching in React

# Excersises todo:

### Chapter Exercises

- **Chapter:** React Fundementals - Props Handling

  - [x] Read more about javascripts desctructuring assignment
        Used to break apart an object or an array
        into single values for more consice
        variable assignment.
        example:
        let numbers = [1,2];
        now if I wanted to grab both values and
        assign them to variables:
        let [valueOne, valueTwo] = numbers;
        instead of:
        let valueOne = numbers[0];
        let valueTwo = numbers[1];
        It's essentially just less syntax for grabbing
        values out of an array;

        For objects, it's the same idea.
        let person = {
            name: 'Jarec',
            age: 25,
        };
        let {name} = person;
        console.log(name);

  - [x] think about array desctructuring
        and object destructuring
  - [x] read more about javascripts spread operator
        A syntax for breaking apart interables
        for passing as arguments where 0 or more arguments
        would be expected;
        example:
        let nums = [1,2];
        let moreNums = [3,4];
        let allTheNums = [];

            for(let i = 0; i < nums.length; i++) {
                allTheNums.push(nums[i]);
            }

            for(let i = 0; i < moreNums.length; i++) {
                allTheNums.push(moreNums[i])
            }

            console.log(allTheNums)
        Easier:
            let nums = [1,2];
            let moreNums = [3,4];
            let allTheNums = [...nums, ...moreNums];

            console.log(allTheNums)

  - [x] read more about javascripts rest parameters
          
         This syntax allows javascript developers to assume an
        infinite amount of arugments, and represent them
        as an array.
        function concatArgs(...args) {
        return args.join(" ");
        }

        console.log(concatArgs("Programming","is","cool"))

  - [x] Get a good sense about JavaScript (e.g. spread operator, rest parameters, destructuring) and what's related to React (e.g. props) from the last lessons.

- **Chapter:** React Fundementals - React Side-Effects

  - [x] read more about Reacts useEffect Hook
  - [x] Give the first argument's function a console.log() and experiment with React's useEffect Hook's dependency array. Check the logs for an empty dependency array too.

- **Chapter:** React Fundementals - React Custom Hooks (Advanced)

  - [] Read more about React Hooks, and develop an understanding of them.

- **Chapter:** React Fundementals - Fragments

  - [x] learn about fragments
        Fragments are a solution to get around wrapping top level elements in a div which could create incorrect html; React.Fragment or <></> do not render html, so tables and lists can be rendered without random divs in their markup

- **Chapter:** React Fundementals - Imperative React

  - [] Read more about reacts useRef Hook

- **Chapter:** React Fundementals - Inline Handler in JSX

  - [] Review handlers: callback handlers, and inline handlers.

- **Chapter:** React Fundementals - React Conditional Rendering

  - [] read more about conditional rendering in React

- **Chapter:** React Fundementals - React Advanced State

  - [][read more about reducers in javascript.](https://www.robinwieruch.de/javascript-reducer) **!THIS IS IMPORTANT!**
  - [] Read more about reducers and useReducer in React **THIS IS IMPORTANT!** [1](https://www.robinwieruch.de/react-usereducer-hook)
    [2](https://reactjs.org/docs/hooks-reference.html#usereducer)

- **Chapter:** React Fundementals - React Impossible States
  - [] Read over the previously linked tutorials about reducers in JavaScript and React.
  - [][read more about when to use usestate or usereducer in react.](https://www.robinwieruch.de/react-usereducer-vs-usestate)
