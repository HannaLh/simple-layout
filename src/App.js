import React from 'react';
import Header from "./Components/Header/Header";
import Aside from "./Components/Aside/Aside";
import Main from "./Components/Main/Main";

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
