import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const SizesDiv = styled.div `${tw``}`;
const SizeButton = styled.button `
color:${props=>props.isChecked?'white':'black'};
background-color:${props=>props.isChecked?'black':'white'};
border:'1px solid black';
border-radius:50%;
`;
const SizeText = styled.div `${tw`text-black`}`;
const AllSizeButtons = styled.div `${tw`flex flex-wrap`}`;

export { SizesDiv, SizeButton, SizeText, AllSizeButtons };
