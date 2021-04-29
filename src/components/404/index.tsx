import React from 'react';
import sprite from "../../assets/sprite.svg";
import styled from 'styled-components';

export const FourHundredFour: React.FC = () => {
    return (
        <Container>
            <Header>Page not found</Header>
            <div>
                <Icon>
                    <use href={sprite + "#404"}></use>
                </Icon>
            </div>
            <Text>
                This page does not exist, check the links
            </Text>
        </Container>
    )
}

const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
text-align: center;
`;

const Header = styled.h4`
position: relative;
font-size: 1.5em;
line-height: 1em;
margin-bottom: 20px;
color: #fff;
background: #111;
font-weight: 300;
padding: 10px 20px;
display: inline-block;
`;

const Text = styled.p`
color: #000;
font-size: 1.2em;
`;

const Icon = styled.svg`
width: 250px;
height: 150px;
`;