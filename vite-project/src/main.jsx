import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// const index = 0;
// setInterval(() => {
// const element = (
//   <h1 className="heading" tabIndex={index}>
//     <span className="text">Hello {new Date().toLocaleTimeString()}</span>
//     <img src="" />
//   </h1>
// );


//   ReactDOM.render(element, document.getElementById('root'));
// }, 1000);


// React functional Component
// function Clock({ locale }){
// return(
//   <h1 className="heading">
//      <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
//    </h1>
// );
// }
// // ReactDOM.render(Clock(), document.getElementById('root'));
// ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));


// //using class Component
// class Clock extends React.Component{
//   render() {
//     return (
//       <h1 className="heading">
//       <span className="text">Hello {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
//     </h1> 
//     );
//   }
// }

// // const ClockComponent = new Clock();
// ReactDOM.render(<Clock locale="bn-BD"> world </Clock>, document.getElementById('root'));
