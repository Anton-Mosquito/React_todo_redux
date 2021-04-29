import React from "react";
import styled, { keyframes } from 'styled-components';

export const Loader: React.FC = () => {
	return (
	<Container>
		<BoxLoad></BoxLoad>
	</Container>
	);
};


const Container = styled.div`
display: "flex";
justifyContent: "center";
alignItems: "center";
`;

const animate = keyframes`
17% {
	border-bottom-right-radius: 6px;
}
25% {
	transform: translateY(18px) rotate(22.5deg);
}
50% {
	transform: translateY(36px) scale(1, 0.9) rotate(45deg);
	border-bottom-right-radius: 80px;
}
75% {
	transform: translateY(18px) rotate(67.5deg);
}
100% {
	transform: translateY(0) rotate(90deg);
}
`;

const shadow = keyframes`
0%,
	100% {
		transform: scale(1, 1);
	}
	50% {
		transform: scale(1.2, 1);
	}
`;

const BoxLoad = styled.div`
width: 100px;
height: 100px;
margin: auto;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
&::before{
	content: '';
	width: 100px;
	height: 10px;
	background: rgb(0,0,0);
	opacity: 0.1;
	position: absolute;
	top: 118px;
	left: 0;
	border-radius: 50%;
	animation: ${shadow} 0.58s linear infinite;
}
&::after {
	content: '';
	width: 100px;
	height: 100px;
	background:#03a9f4;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 6px;
	animation: ${animate} 0.58s linear infinite;
}
`




