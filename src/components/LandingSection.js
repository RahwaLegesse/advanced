import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, HStack, Heading, VStack } from "@chakra-ui/react";
import Header from "./Header";
const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const LandingSection=()=>(
  <FullScreenSection
  justifyContent='center'
  alignItems='center'
    isDarkBackground
    backgroundColor="#2A4365"
    >
      <VStack spacing={16}>      
 <Avatar src="https://i.pravatar.cc/150?img=7"
  size='2xl' 
  name='rahwa'
  />
          <Heading as='h4' size='md'noOfLines={1}>{greeting}</Heading>
          <vStack>
           <Heading as='h1' size='3xl' noOfLines={1}>{bio1}</Heading>
           <Heading as='h1' size='3xl' noOfLines={1}>{bio2}</Heading>
          </vStack>
        </VStack>
      
   </FullScreenSection>
);

    

export default LandingSection;