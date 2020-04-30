import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const MainDiv = styled.div `${tw`max-h-screen pt-8 pb-8 flex justify-center bg-blue-100`}`;
const SignInPageMainDiv = styled.div `${tw`flex p-8 bg-white max-w-full flex-col justify-center `}`;
const SignInText = styled.p `${tw`pt-2 pb-2 font-bold`}`;
const Form = styled.form `${tw``}`;
const UserName = styled.input `${tw`m-1 pt-2 pb-2 border-gray-300 border-solid border-2 rounded`}`;
const Password = styled.input `${tw`m-1 pt-2 pb-2 border-gray-300 border-solid border-2 rounded`}`;
const SignInButton = styled.button `${tw`flex flex-grow bg-black pt-2 pb-2 m-1 text-white rounded`}`;
const ErrorMessage = styled.p `${tw`text-red-600`}`;
export {
    MainDiv,
    SignInPageMainDiv,
    SignInText,
    Form,
    UserName,
    Password,
    SignInButton,
    ErrorMessage
};
