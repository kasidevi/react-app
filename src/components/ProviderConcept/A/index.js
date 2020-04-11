import React from 'react'
import { Provider } from 'mobx-react'
import B from '../B/index.js'

class A extends React.Component {
    render() {
        //  return <div>NEVER GIVEUP</div>
        return <Provider temp={'NEVER GIVEUP'}>
        <B />
        </Provider>;
    }
}
export default A;

// class B extends React.Component {
//     render() {
//         const { temp } = this.props;
//         return <C temp={temp}/>;
//     }
// }
// export default B;


// class C extends React.Component {
//     render() {
//         const { temp } = this.props;
//         return <div>{temp}</div>;
//     }
// }
//export default C;
