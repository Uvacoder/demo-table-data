// Chakra imports
import { Box, Text, Link, useColorModeValue } from "@chakra-ui/react";
// Custom components
// import Card from "components/card/Card.js";
// import BarChart from "components/charts/BarChart";
import React from "react";
export default function HoursSpent(props) {
  const { children, ...rest } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("brand.400", "white");
  return (
    <Box {...rest}>
      {children}
      <Text
        color={textColor}
        fontWeight="500"
        mx="auto"
        w="max-content"
        mt="50px"
      >
        This bar chart is a component from{" "}
        <Link
          mx="3px"
          color={textColorSecondary}
          href="https://www.horizon-ui.com?ref=codesandbox"
          target="_blank"
          fontWeight="700"
        >
          Horizon UI Dashboard.
        </Link>
      </Text>
    </Box>
  );
}
