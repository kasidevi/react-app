// import React from 'react'
// import { Provider } from 'mobx-react'
// import { MainDiv } from './stylings.js';

// const ThemeContext = React.createContext({ color: 'color', changeColor: () => {} });

// class Parent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { color: 'skyblue', changeColor: this.onChangeColor };
//     }
//     onChangeColor = () => {
//         this.setState({
//             color: this.state.color === 'skyblue' ? 'red' : 'skyblue'
//         });
//     }
//     render() {
//         console.log(this.state);
//         return (
//             <ThemeContext.Provider value={this.state}>
//         <ChildOne />
//         </ThemeContext.Provider>
//         );
//     }
// }

// export default Parent;

// class ChildOne extends React.Component {
//     render() {
//         return <ChildTwo />;
//     }
// }


// class ChildTwo extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         return (<ThemeContext.Consumer>{({color,changeColor})=>(
//       <div><MainDiv onClick={changeColor} color={color}></MainDiv>
//       <button >change color</button>
//       </div>
//         )}

//         </ThemeContext.Consumer>);
//     }
// }
