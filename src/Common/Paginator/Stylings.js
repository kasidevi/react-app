import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const WrappedDiv = styled.div `${tw`flex justify-end`}`;
const LeftArrowButton = styled.button `${tw`bg-black text-lg text-white`}`;
const PageNumber = styled.p `${tw`text-lg`}`;
const RightArrowButton = styled.button `${tw`bg-black text-lg text-white`}`;


export {
    WrappedDiv,
    LeftArrowButton,
    PageNumber,
    RightArrowButton
};
