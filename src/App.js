import React from 'react';
// import './App.css';
// import Demo from './pages/demo/'

// function App() {
//   return (
//     <div className="App">
      
//       {this.props.children}
//     </div>
//   );
// }

class App extends React.Component{

  render(){
    return (
      <div className="App">

        {this.props.children}
      </div>
    );
  }
}

export default App;
