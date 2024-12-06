import React from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import mpt from "../../assets/projects/mpt.jpeg";
import cb2d from "../../assets/projects/cb2d.jpeg";
import mb2d from "../../assets/projects/mb2d.jpeg";
import vscanner from "../../assets/projects/vscanner.jpeg";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={mpt}
            projectName={"Modern Periodic Table  MPT"}
            aboutProject={
              "This is a mobile app version of modern periodic table."
            }
            techStack={"Flutter"}
            projectLiveLink="https://play.google.com/store/apps/details?id=com.violettechapp.modern_periodic_table&hl=en&gl=US"
            projectLink="https://play.google.com/store/apps/details?id=com.violettechapp.modern_periodic_table&hl=en&gl=US"
          />
          <ProjectCard
            projectImage={cb2d}
            projectName={"Color Blocks 2D"}
            aboutProject={"A Tetris like game with a twist of colors and shapes."}
            techStack={"Flutter"}
            projectLiveLink=""
            projectLink=""
          />
          <ProjectCard
            projectImage={mb2d}
            projectName={"Master Brick 2d"}
            aboutProject={
              "A Tetris like game"
            }
            techStack={
              "Flutter"
            }
            projectLiveLink="https://play.google.com/store/apps/details?id=com.violettechapp.tetris"
            projectLink="https://play.google.com/store/apps/details?id=com.violettechapp.tetris"
          />
          <ProjectCard
            projectImage={vscanner}
            projectName={"VioScanner"}
            aboutProject={"A QR code and barcode scanner & maker app."}
            techStack={"Flutter"}
            projectLiveLink="https://play.google.com/store/apps/details?id=com.violettechapp.vscanner"
            projectLink="https://play.google.com/store/apps/details?id=com.violettechapp.vscanner"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
