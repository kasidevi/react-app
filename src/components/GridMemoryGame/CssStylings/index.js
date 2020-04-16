import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const GridMemoryGameMainDiv = styled.div `${tw`flex flex-col  items-center justify-center`}`;

const HeaderDiv = styled.div `${tw`flex flex-col items-center`}`;
const TopLevelHeading = styled.p `${tw`text-3xl`}`;
const ThemeAndLevel = styled.div `${tw`flex justify-between items-center`}`;
const Level = styled.p `${tw`text-2xl`}`;
const Theme = styled.button `${tw`text-2xl p-1`}`;
const AllCells = styled.div `${tw`flex w-1/2 flex-wrap justify-center`}`;
const EachCell = styled.div `${tw`bg-black w-24 h-24 m-1`}`;

const GameResultMainDiv = styled.div `${tw`flex flex-col justify-center`}`;
const LevelDisplayInFinal = styled.p `${tw`text-3xl`}`;
const CongratsMsg = styled.p `${tw`text-green-500 text-3xl`}`;
const PlayAgainButton = styled.button `${tw`text-white bg-indigo-400 rounded`}`;
export {
    GridMemoryGameMainDiv,
    HeaderDiv,
    TopLevelHeading,
    ThemeAndLevel,
    Level,
    Theme,
    AllCells,
    EachCell,
    GameResultMainDiv,
    LevelDisplayInFinal,
    CongratsMsg,
    PlayAgainButton
};
