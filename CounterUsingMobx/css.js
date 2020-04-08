import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Body = styled.div `${tw`flex flex-col justify-center items-center`}`;
const CounterHeading = styled.div `${tw`font-bold`}`;

const OperationPart = styled.div `${tw`flex  justify-around items-center`}`;
const Increment = styled.button `${tw`p-2`}`;
const InputText = styled.input `${tw``}`;
const Decrement = styled.button `${tw`p-2`}`;


export {
    Body,
    CounterHeading,
    OperationPart,
    Increment,
    InputText,
    Decrement
};
