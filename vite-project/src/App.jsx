// import Clock from './components/Clock';

// function App() {
//   console.log('app component rendered');
//     return (
//         <div>
//             {/* <Clock locale="bn-BD" /> */}
//             <Clock />
//         </div>
//     );
// }

// export default App;

//list & keys
// import ClockList from './components/ClockList';

// function App(){
//     const quantities = [1,2,3]
//     return(
//         <div>
//             <ClockList quantities={quantities}></ClockList>
//         </div>
//     );
// }

// export default App;


//Form Handling
// import Form from './components/Form';
// // import './buttonStyle.css';
// function App() {
//     return (
//         <div className="container">
//             <Form />
//         </div>
//     );
// }

// export default App;


//Lifting state up----Calculator
// import Calculator from "./components/Calculator";

// function App(){
//     return <Calculator />;
// }

// export default App;


//Composition vs Inheritance
//composition
// import Text from "./components/inheritance/Text";

// function App(){
//     return <Text />;
// }

// export default App;


//inheritance
import Text from "./components/composition/Text";
import Emoji from "./components/composition/Emoji";
import Bracket from "./components/composition/Bracket";

function App(){
    // return <Emoji>{({addEmoji}) => <Text addEmoji={addEmoji}></Text>}</Emoji>;
    // return <Text />     -----without emoji component it's also working fine...no dependency

    return(
        <Emoji>
            {({addEmoji}) => (
                <Bracket>
                {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}></Text>}</Bracket>
            )}</Emoji>
    )
}

export default App;

