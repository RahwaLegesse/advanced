import { color, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
   

    <VStack
       color='black'
       backgroundColor='white'
       cursor='pointer'
       borderRadius='x1'>
<Image src ={imageSrc} borderRadius='x1'/>
<VStack spacing={4}p={4}>
  <HStack justifyContent='space-between'alignItems='center'>
<Heading as='h4'size='md'>{title}</Heading>

</HStack>
<text color="gray"fontSize='1g'>{description}</text>
<HStack>
  <p>See More</p>
  <FontAwesomeIcon icon={faArrowRight} size="1x" />
</HStack>
</VStack>
    </VStack>
  )
};

export default Card;
