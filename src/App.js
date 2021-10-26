import * as React from 'react';
 const title = 'react';
function App() {
  return (
    <div>
      <h1>Hello {title}</h1>
      <label htmlFor="search">Search</label>
      <input id="search" type="text"/>
    </div>
  );
}
 
export default App;