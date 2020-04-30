import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const SizesDiv = styled.div `${tw``}`;
const SizeButton = styled.button `${tw`rounded-full`}`;
const SizeText = styled.div `${tw`text-black`}`;
const AllSizeButtons = styled.div `${tw`flex flex-wrap`}`;

export { SizesDiv, SizeButton, SizeText, AllSizeButtons };
