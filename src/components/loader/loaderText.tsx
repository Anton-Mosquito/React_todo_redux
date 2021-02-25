import React from "react";
import styled, { keyframes } from 'styled-components';

export default () => {
  return (
    <Wrapper>
      <Container>
        <Letter style={{animationDelay: "0.3525s"}}>
          L
        </Letter>
        <Letter style={{animationDelay: "0.429s"}}>
          o
        </Letter>
        <Letter style={{animationDelay: "0.4955s"}}>
          a
        </Letter>
        <Letter style={{animationDelay: "0.572s"}}>
          d
        </Letter>
        <Letter style={{animationDelay: "0.6385s"}}>
          i
        </Letter>
        <Letter style={{animationDelay: "0.715s"}}>
          n
        </Letter>
        <Letter style={{animationDelay: "0.7815s"}}>
          g
        </Letter>
      </Container>
    </Wrapper>
  );
};

const animation = keyframes`
0%{
  color:rgb(0,0,0);
}
100%{
  color:rgb(255,255,255);
}
`

const Wrapper = styled.div`
display: "flex";
justifyContent: "center";
alignItems: "center";
margin: ".5rem";
`;

const Container = styled.div`
width:234px;
margin:auto;
`;

const Letter = styled.div`
color:rgb(0,0,0);
font-size:24px;
text-decoration:none;
font-weight:normal;
font-style:normal;
float:left;
animation-name: ${animation};
animation-duration:1.001s;
animation-iteration-count:infinite;
animation-direction:normal;
`