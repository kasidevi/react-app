import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const ProductDashBoard = styled.div `${tw`flex flex-row`}`;
const HeaderAndProductSort = styled.div `${tw`flex justify-between`}`;
const ProductListDiv = styled.div `${tw`flex flex-col flex-wrap`}`;
export { ProductDashBoard, HeaderAndProductSort, ProductListDiv };
