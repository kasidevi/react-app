import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const MainDiv = styled.div `
background-color:${props=>props.selectedTheme==='light'?'#e6f2ff':'#132639'}`;

const DivTagWithFlexRow = styled.div `${tw`flex flex-wrap justify-around`}`;

const DivForEmojiCard = styled.div `${tw`flex flex-col flex-wrap justify-around items-center rounded shadow-custom  mb-12 mt-12`}
color:${props=>props.selectedTheme==='light'?'black':'white'};
background-color:${props=>props.selectedTheme==='light'?'white':'#336699'};
`;

const DivForWinOrLose = styled.div `${tw`flex flex-col flex-wrap justify-around items-center text-4xl font-bold pt-12 pb-16 mb-2 mt-2 `}
color:${props=>props.selectedTheme==='light'?'black':'white'};
`;

const TextTag = styled.p `${tw`font-bold p-3`}`;
const EmojiGameHeading = styled.p `${tw`font-medium text-2xl p-3`}`;
const PTag = styled.p `${tw`pl-4 pb-8`}`;

const HeaderForEmojiGame = styled.div `${tw`flex justify-between pb-2 pt-2 pl-1 pr-1`};
background-color:${props=>props.selectedTheme==='light'?'white':'#19334d'};
color:${props=>props.selectedTheme==='light'?'black':'white'};
`;

const EachEmoji = styled.img `${tw`w-64 mb-0`}`;
const EmojiName = styled.p `${tw`pt-0 pb-8`}`;
const PlayAgainButton = styled.button `${tw`text-white border-none rounded bg-blue-600 pl-6 pr-6 pt-4 pb-4 text-3xl`}`;

const DivForFooter = styled.div `${tw`flex flex-col bg-white`};
background-color:${props=>props.selectedTheme==='light'?'white':'#19334d'};
color:${props=>props.selectedTheme==='light'?'black':'white'};
`;
const HowToPlayHeading = styled.p `${tw`font-bold p-3 text-3xl`}`;
const HowToPlayText = styled.p `${tw`pl-4 pb-8 text-2xl`}`;

const ChangingTheme = styled.button `
background-color:${props=>props.selectedTheme==='light'?'white':'#19334d'};
color:${props=>props.selectedTheme==='light'?'black':'white'};
border:${props=>props.selectedTheme==='light'?'1px solid black':'1px solid white'};
`;

const YouLose = styled.p `${tw`text-red-500 font-bold `}`;
const YouWon = styled.p `${tw`text-green-500 font-bold `}`;

export {
    DivTagWithFlexRow,
    DivForEmojiCard,
    EmojiGameHeading,
    TextTag,
    PTag,
    HeaderForEmojiGame,
    EachEmoji,
    EmojiName,
    PlayAgainButton,
    DivForFooter,
    HowToPlayHeading,
    HowToPlayText,
    ChangingTheme,
    MainDiv,
    DivForWinOrLose,
    YouLose,
    YouWon
};
