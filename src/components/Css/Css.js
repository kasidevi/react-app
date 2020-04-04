import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const HeaderSection = styled.div `${tw`flex justify-between p-1 bg-white  items-center`}`;
const SearchBarAlignment = styled.label `${tw`flex items-center rounded-md bg-white text-lg`}`;
const InputTag = styled.input `${tw`rounded-md bg-white`}`;
const SearchBarColor = styled.span `${tw`flex text-xl text-gray-500 items-end pl-2`}`;
const SearchCountryAndSelectedRegion = styled.div `${tw`flex justify-between p-2`}`;

const AllCountries = styled.div `${tw`flex flex-wrap`}`;
const FlagImage = styled.img `${tw`w-56 h-56 rounded-tl-lg rounded-tr-lg object-cover`}`;
const EachCountry = styled.div `${tw`w-56 h-auto rounded-lg m-2 bg-white`}`;
const EachCountryChild = styled.div `${tw`flex flex-col flex-wrap p-2 ml-1`}`;
const Para = styled.p `${tw`pt-4`}`
export {
    HeaderSection,
    SearchBarAlignment,
    InputTag,
    SearchBarColor,
    SearchCountryAndSelectedRegion,
    AllCountries,
    FlagImage,
    EachCountryChild,
    EachCountry,
    Para
};
