import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const GridMemoryGameMainDiv = styled.div `${tw``}`;

const HeaderDiv = styled.div `${tw`flex flex-col items-center`}`;
const TopLevelHeading = styled.p `${tw`text-3xl`}`;
const ThemeAndLevel = styled.div `${tw`flex justify-between items-center`}`;
const Level = styled.p `${tw`text-2xl`}`;
const Theme = styled.button `${tw`text-2xl p-1`}`;
export {
    GridMemoryGameMainDiv,
    HeaderDiv,
    TopLevelHeading,
    ThemeAndLevel,
    Level,
    Theme
};
