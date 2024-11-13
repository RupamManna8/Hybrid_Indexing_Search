import React from "react";
import HomePage from "./homePage";
import styled from "styled-components";
import '../../'
import Footer from "./Footer";
import Content from "./content";

const  LandingPage = () => {
  return (
    <React.Fragment>
      <Container>
        <BackgroundImage>
          <HomePage />
        </BackgroundImage>
        <div>
          <Content/>
        </div>
      <div>
         <Footer />
      </div>
       
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  
  display:flex;
  flex-direction:column;
  color:white;
  gap:20px;
  width: 100%;
  height:3000px;
  background-color: rgba(0, 0, 20, 1);
   z-index: 10;
`;

const BackgroundImage = styled.div`
  z-index: 0;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-image: 
    linear-gradient(
      to top, 
      rgba(0, 0, 20, 1) 10%, 
      rgba(0, 0, 0, 0) 40%, 
      rgba(0, 0, 0, 0) 70%, 
      rgba(0, 0, 0, 0.4) 90%
    ), 
    url("https://images.unsplash.com/photo-1509098681029-b45e9c845022?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuJTIwd2l0aCUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D");
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;

  animation: fadeInZoom 4s ease-in forwards; /* Apply animation */
  
  @keyframes fadeInZoom {
    0% {
      opacity: 0;
      transform: scale(1.1); /* Slight zoom-in at the beginning */
    }
    100% {
      opacity: 1;
      transform: scale(1); /* Return to normal scale */
    }
  }
`;
export default LandingPage;