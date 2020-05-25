import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { SizesDiv, SizeButton, SizeText, AllSizeButtons } from './SizeFilterCss';

@observer
class SizeFilter extends React.Component {

    @observable isChecked
    constructor(props) {
        super(props);
        this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        this.isChecked = false;
    }

    onSelectSize = (size) => {
        this.props.onSelectSize(size);
        this.isChecked = !this.isChecked;
    }

    render() {
        return (<SizesDiv>
<SizeText>Sizes</SizeText>
<AllSizeButtons>
{this.sizes.map((size)=><SizeButton isChecked={this.isChecked} key={Math.random()} id={Math.random()} onClick={this.onSelectSize.bind(this,size)}>{size}</SizeButton>)}
</AllSizeButtons>
</SizesDiv>);
    }
}

export { SizeFilter };

/*<SizeButton>xs</SizeButton>
<SizeButton>s</SizeButton>
<SizeButton>l</SizeButton>
*/
