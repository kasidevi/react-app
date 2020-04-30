import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const EachProduct = styled.div `${tw`bg-white flex flex-col justify-center items-center p-2 m-2`}`;
const Image = styled.img `${tw`w-64`}`;
const Title = styled.p `${tw`text-black mb-4`}`;
const LineBar = styled.p `${tw`border-2 rounded border-solid border-yellow-600 w-6 mb-4`}`;
const Rate = styled.div `${tw`flex justify-center`}`;
const CurrencyFormat = styled.p `${tw`text-sm self-end`}`;
const Price = styled.p `${tw`text-black text-2xl`}`;
const InstallmentsCount = styled.div `${tw`text-gray-500`}`;
const AddCartButton = styled.button `${tw`bg-black flex flex-grow text-white mb-2 mt-2 p-2 rounded`}`;

export {
    EachProduct,
    Image,
    Title,
    LineBar,
    Rate,
    CurrencyFormat,
    Price,
    InstallmentsCount,
    AddCartButton
};
