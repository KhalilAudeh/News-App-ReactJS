
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `getting to the API`

    - To get to the news in the api, I used a function-call called fetch
    - At first, I added ComponentDidMount before the render and put this fetch call inside it
    - After making sure of the data getting from the console, I added state for the news array to start displaying      data needed
    - Creating the state was done by defining constructor with props and the state

### for the loading: the api send 10 every time, but they're different based on the page number that's why we need the loadMore button to increment l page; so we need to keep the old array and add the new 10 elements returned\

### `for the 2nd screen`

    - Kindly note that the code is found for that part also; however, it was not working when I add the Link tag. It    was conflicting with the Router. 
    - For that part, I added button under each news item and by pressing on this button, it will route to another       path component called DetailPage. 
    - DetailPage has also the fetch and map functions to call the api and get data. I added to get other details in     addition to the main website that the news come from if the user needs more info. 
    - After that, I added a button to get back to News page which has all the list of news using Link tag from          react-router

### `Libraries used`

    - react-bootstrap: for having nicer design for some react elements and make better UI
    - react-dom: a main package that should be used for rendering the entry point of react app
    - react-router & react-router-dom: they are the core packages for the router when needed in react. These            libraries was used for the 2nd part for routing from one component to another and getting back also to the        main by using Link, BrowserRouter, Route, Switch. These work when react wants to render & navigate for            specific paths
    - antd: this library I found one of these used for design in React. It makes work easier and nicer. It helped me    when working on the loadingMore part for latest news everytime the user press the load button. It contains high   quality components for UI react such as Card, List, Button from the ones I used.