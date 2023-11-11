# Catatan Week 2

> Tuliskan apapun yang kalian pelajari pada phase 2 week-2 di file ini.

- Is javascript library for building dynamic interface => what the user react and see on the main screen 
- called as a library because it gives developer more tools to help build an UI
- an un-opionated library => doesn't really matter how you use it
- html => dom tree => object representation from html 
- dom manipulation => add/reduce dom using javascript
- imperative programming => step by step instruction on how to make somthing
- declarative programming => write what we want as the result
- react is a declarative programming library
- need two package for react => react-dom and babel
- react-dom for the writing method helper
- babel for the browser recognize it's using the jsx extension on the file

## How to use it? VITE

- Bundler => Vite
- Installing Vite
```
npm create vite@latest
```
- npm i then npm run dev to run the project
- import y from 'y'
- export default x
- export cont x = () => {}
- jsx => js + react + components or there is something to show
- Functional Component => create html with js
- <> </> => called as a Fragment

REACT:
- state => something that can change
- useState => function for checking conditional 

## React Hooks

- useState is a hook that let you save a variable inside of it
```
const [state, setState] = useState(intialState)
```
- hooks => a function that enabled us to use react state and lifecycle from function components => let us use react without classes
- Can make a method or use the state data without making a class
- use => means using hooks => don't make a function using use
- useState and useEffect
- Why?
	- Clean Code
	- Reusable Logic
	- Easier to Use

## Use Effect

```
useEffect(setup, dependencies?)
```
- what do we want to get if we do something / synchronize a component with an external system
- mounted => data fetching
- updated => when a depedencies change
- unmounted => to unregister an event when the component is closed => usually to clean data / localStorage when logout 
### Setup

first parameter (setup) is a callback and second one (depedencies) is an array
if we fill depedencies it will be updated
```
import { useEffect } from 'react'
import { createConnection } from './chat.js'

function ChatRoom({ roomId }) {  
const [serverUrl, setServerUrl] = useState('https://localhost:1234'); 

useEffect(() => {
	const connection = createConnection(serverUrl, roomId)   
	connection.connect();   
	return () => {
	      connection.disconnect();
	          };
	}, [serverUrl, roomId]); => to watch state that can changed
	// ...
}
```

effect => will run every re-render
updated => everytime a useState is changed/updated it will do smth
```
const [count, setCount] = useState(0)

useEffect(() => {
	clg('re-render effect')
}), [count]
```

to create a router in a single page application

```
npm i react-router-dom
```

```
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
```

```
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
```

```
return (
	<>
		<RouterProvider router={router} />
	</>
)
```


> "Pemahaman yang baik berasal dari keinginan untuk terus belajar, dan catatan adalah langkah pertama menuju pengetahuan yang dalam."
