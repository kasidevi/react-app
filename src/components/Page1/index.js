import React from "react";
import logo from "../../logo.svg";
//import { css, devi } from 'emotion'
//import { css, jsx } from '@emotion/core'
//import styled from '@emotion/styled'
//import { jsx, css } from '@emotion/core'
import tw from "tailwind.macro";
import styled from '@emotion/styled';



// const color = 'white'
// const Devi = styled.button `
//   padding: 32px;
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   color: black;
//   font-weight: bold;
//   &:hover {
//     color: white;
//   }
// `
// const style = css `
//   color: pink;
// `

// const SomeComponent = ({ children }) => (
//   <div css={style}>
//     Some hotpink text.
//     {children}
//   </div>
// )

// const anotherStyle = css({
//   textDecoration: 'underline'
// })

// const AnotherComponent = () => (
//   <div css={anotherStyle}>Some text with an underline.</div>
// )

function Page1() {
    // return (
    //   <div
    //   className={css`
    //     padding: 32px;
    //     background-color: hotpink;
    //     font-size: 24px;
    //     border-radius: 4px;
    //     :hover {
    //       color: ${color};
    //     }
    //   `}
    // >
    //   Hover to change color.
    // </div>
    // )
    //___________
    // return (
    //   <div
    //   css={css`
    //     padding: 32px;
    //     background-color: hotpink;
    //     font-size: 24px;
    //     border-radius: 4px;
    //     &:hover {
    //       color: ${color};
    //     }
    //   `}
    // >
    //   Hover to change color.
    // </div>
    // )
    //_____________
    // return (<Devi>This my button component.</Devi>);
    //_________

    // return (
    //   <SomeComponent>
    //   <AnotherComponent />
    // </SomeComponent>
    // )
    //__________
    return <div className='bg-pink-100 h-screen flex flex-col justify-center items-center'>
  <img  src={logo} className="App-logo  w-4/4" alt="logo" />
  <h1>Page 1 devi</h1>
  </div>;
}
//____
//let Page = styled.div `${tw`bg-red-400 rounded border-green-800`}`
//const DivWrapper = styled.div `${tw`bg-pink-300 `}`
//export { Page, DivWrapper }
export default Page1;
