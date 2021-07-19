import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from "styled-components";
import { useAnimation, motion } from "framer-motion";
import {imageFade} from "../animations";

interface ImageType {
	file: string;
}


export const App = () => {
	const [image, setImage] = useState<string>("https://purr.objects-us-east-1.dream.io/i/AspVJ.jpg");
	const controls = useAnimation();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	if (!isLoading) {
		controls.start("show");
	} else {
		controls.start("hidden");
	}

	const getImage = async () => {
		setIsLoading(true);
		const imageRequest = await axios.get<ImageType>("https://aws.random.cat/meow");
		setImage(imageRequest.data.file);
	

	}
	
	useEffect(() => {
		getImage();
	}, []);


	return (
		<StyledApp>	
			<GlobalStyle/>
			<ImageContainer ><StyledImage  onLoad={() => setIsLoading(false)} variants={imageFade} animate={controls} initial="show" src={image} alt="cat" /></ImageContainer>
			<StyledButton onClick={getImage}>Change</StyledButton>
		</StyledApp>
	)
};

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #e1bfbf;
	}
`;

const StyledApp = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
`;

const ImageContainer = styled(motion.div)`
	height: 80vh;
	width: 60vw;
	margin: auto;
	margin-top: 2.5rem;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
	border-radius: 2rem;
	overflow: hidden;

	@media (max-width: 768px) {
		width: 90vw;
	}
`;

const StyledImage = styled(motion.img)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 2rem;
`;


const StyledButton = styled.button`
	padding: 1rem 2.5rem;
	margin-top: 2rem;
	border-radius: 10px;
	background: transparent;
	border: 1px solid black;
	font-size: 1.2rem;
`;