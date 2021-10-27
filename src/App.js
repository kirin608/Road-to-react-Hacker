import * as React from 'react';
 
 
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walkie',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://readux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];
 function App() {
  return (
    <div>
      <h1>My hacker story</h1>
      <label htmlFor="search">Search</label>
      <input id="search" type="text"/>
      {/*  */}
      { 
      list.map(function(item){
       return (
         <li key={item.objectID}>
           <span>
             <a href={item.url}>{item.title}</a>
             <span>{item.author}</span>
           </span>
        </li>
       );
      })}
    </div>
  );
}
 
export default App;