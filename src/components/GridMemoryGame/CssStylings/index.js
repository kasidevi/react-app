import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const GridMemoryGameMainDiv = styled.div `${tw`flex flex-col mt-16 mb-16 items-center justify-center`}
background-color:${props=>props.theme==='Light'?'#ebf8ff':'#1a202c'};
color:${props=>props.theme==='Light'?'black':'white'};
`;

const HeaderDiv = styled.div `${tw`flex flex-col items-center`}`;
const TopLevelHeading = styled.p `${tw`text-xl mb-3`}`;
const ThemeAndLevel = styled.div `${tw`flex mt-3 mb-3 justify-between items-center`}
width:${props=>props.width.gridWidth}px;
`;
const Level = styled.p `${tw`text-xl`}`;
const Theme = styled.button `${tw`text-xl p-1`}
background-color:${props=>props.theme==='Light'?'#ebf8ff':'#1a202c'};
color:${props=>props.theme==='Light'?'black':'white'};
border:${props=>props.theme==='Light'?'solid black 1px':'solid white 1px'};
`;
const AllCells = styled.div `${tw`flex flex-wrap justify-center`};
width:${props=>props.width.gridWidth}px;
`;

const EachCell = styled.button `
border:none;
margin:2px;
background-color:${props=>props.cellColor};
width:${props=>props.cellWidth}px;
height:${props=>props.cellWidth}px;
`;

const GameResultMainDiv = styled.div `${tw`h-full flex flex-col items-center justify-center`}`;
const LevelDisplayInFinal = styled.p `${tw`text-3xl text-center`}`;
const CongratsMsg = styled.p `${tw`text-green-500 text-3xl`}`;
const PlayAgainButton = styled.button `${tw`text-white bg-indigo-600 items-center rounded p-2 m-2`}`;
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
