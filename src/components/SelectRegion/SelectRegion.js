import React from 'react'
class SelectRegion extends React.Component {
    onChangeSelectedRegion = () => {
        return this.props.regionOptions.map((list) => <option value={list}>{list}</option>);
    }
    render() {
        return (<div>
   <select className={`${this.props.changeThemeLight} drop-down`} onChange={this.props.onChangeSelectedRegion}>{this.onChangeSelectedRegion()}</select>
    </div>);
    }
}
export { SelectRegion };
