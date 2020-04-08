import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Body = styled.div `${tw`flex flex-col justify-center items-center`}`;
const CounterHeading = styled.div `${tw`font-bold text-4xl`}`;

const OperationPart = styled.div `${tw`flex  justify-around items-center`}`;
const Increment = styled.button `${tw`p-2 w-12 m-2 bg-blue-700 rounded border-none text-2xl font-bold text-white`}`;
const InputText = styled.input `${tw`p-2 m-2 border-2 border-solid text-center text-2xl border-orange-400 rounded`}`;
const Decrement = styled.button `${tw`p-2 w-12 m-2 bg-blue-700 rounded border-none text-2xl font-bold  text-white`}`;


export {
    Body,
    CounterHeading,
    OperationPart,
    Increment,
    InputText,
    Decrement
};
