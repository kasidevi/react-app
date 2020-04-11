import React from 'react'
import { Provider, inject } from 'mobx-react'
import C from '../C/index.js'

//@inject('temp')
class B extends React.Component {
    render() {
        //  const { temp } = this.props;

        return <C/>;
    }
}
export default B;
