import React from 'react';
import Header from "./Components/Header";
import Aside from "./Components/Aside";
import Main from "./Components/Main";

function App() {
  return (
      <React.Fragment>
          <Header/>
          <Aside/>
          <Main/>
      </React.Fragment>
  );
}

export default App;
