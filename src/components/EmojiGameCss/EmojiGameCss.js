import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const DivTagWithFlexRow = styled.div `${tw`flex flex-wrap justify-around`}`;
const DivTagWithFlexcol = styled.div `${tw`flex flex-col flex-wrap justify-around items-center bg-white shadow-lg mb-2 mt-2`}`;
const TextTag = styled.p `${tw`text-lg font-bold text-black p-3`}`;
const PTag = styled.p `${tw``}`;
const HeaderForEmojiGame = styled.div `${tw`flex justify-between bg-white`}`;
const EachEmoji = styled.img `${tw`w-64`}`;
const PlayAgainButton = styled.button `${tw`text-white rounded bg-blue-600 p-6`}`;
const DivForFooter = styled.div `${tw`flex flex-col bg-white`}`;
export {
    DivTagWithFlexRow,
    DivTagWithFlexcol,
    TextTag,
    PTag,
    HeaderForEmojiGame,
    EachEmoji,
    PlayAgainButton,
    DivForFooter
};
