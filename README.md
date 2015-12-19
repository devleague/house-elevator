# House Elevator

There is a house with 4 levels. In that house there is an elevator. You can program this elevator to go up or down, depending on what button the user touches inside the elevator.

levels can be only numbers: `0,1,2,3`
buttons can be strings: `'0','1','2','3'`
possible return values are numbers: `-3,-2,-1,0,1,2,3`

If the elevator is on the ground floor(0th level) and the user touches button `'2'` the elevator must go 2 levels up, so our function must return `2`.

If the elevator is on the 3rd level and the user touches button `'0'` the elevator must go 3 levels down, so our function must return `-3`.

If the elevator is on the 2nd level, and the user touches button `'2'` the elevator must remain on the same level, so we return `0`.

We cannot endanger the lives of our passengers, so if we get erronous inputs, our elevator must remain on the same level. For example `goto(2,'4')` must return `0`, because there is no button `'4'` in the elevator. 

`goto(4,'0')` must return `0`, because there is no level 4. 

`goto(3,undefined)` must return `0`.

`goto(undefined,'2')` must return `0`.

`goto([],'2')` must return `0` because the type of the first argument is an **array** instead of a **number**.

`goto(3,{})` must return `0` because the type of the input button is an **object** instead of a **number**.

## Getting Started
1. Fork this repo and clone it from your github page onto your computer.
1. To retrieve all dependecies, run the command:  `npm install`
1. Do your work in the `elevator.js` file
1. Run your tests with the command: `npm test`
1. Commit each time you pass a test
1. Make all the tests pass
