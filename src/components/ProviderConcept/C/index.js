import React from 'react'
import { Provider, inject } from 'mobx-react'

@inject('temp')
class C extends React.Component {
    render() {
        const { temp } = this.props;
        return <div>{temp}</div>;
    }
}
export default C;
