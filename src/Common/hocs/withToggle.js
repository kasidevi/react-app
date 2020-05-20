import React from 'react';
import { observable } from 'mobx';

function withToggle(WrappedComponent) {
    return class extends React.Component {
        @observable toggleStatus

        constructor(props) {
            super(props);
            this.toggleStatus = false;
        }

        onToggle = () => {
            this.toggleStatus = !this.toggleStatus;
        }

        render() {
            return <WrappedComponent onToggle={this.onToggle()} {...this.props}/>;
        }
    };
}

export default withToggle;
