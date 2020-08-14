# finished reading:

    props handling

# Excersises todo:

### Chapter Exercises

- **Chapter:** React Fundementals: Props Handling

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
