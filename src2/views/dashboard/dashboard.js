import React from "react";
import {
  Flex,
  Box,
  Text,
  Grid,
  useColorModeValue,
  useStyleConfig,
  Skeleton,
} from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import dashboardimg from "../../assets/dashboard.gif";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Dashboard() {
  const [quote, setQuote] = useState("");
  const [loadedDashboardimg, setloadedDashboardimg] = useState(false);
  const styles = useStyleConfig("Card");

  let highlightTextColor = useColorModeValue("lightblue.100", "lightpeach.100");
  let textColor = useColorModeValue("gray.700", "white");

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  useEffect(() => {
    setQuote(
      "In a world of billions, she was my perfect mom. Every second without you is a longing. Your love guides me."
    );
  }, []);

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "60px", md: "80px", xl: "10px" }}>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr",
            }}
            templateRows={{
              base: "repeat(2, 0.5fr)",
              lg: "1fr",
            }}
            gap={{ xl: "20px" }}
          >
            <Box
              pt={{ xl: "100px" }}
              pl="10px"
              textAlign="center"
              fontSize={{ sm: "1.5em", md: "3em", xl: "2.5em" }}
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box __css={styles} border="none">
                  <Text
                    fontFamily="Pacifico"
                    fontWeight="bold"
                    color={textColor}
                  >
                    Welcome to my portfolio – where creativity meets innovation!
                  </Text>

                  <Text
                    fontFamily="Dancing ScriptDancing Script"
                    fontWeight="bold"
                    color={textColor}
                    mt="20px"
                  >
                    This is{" "}
                    <Text display="inline-flex" color={highlightTextColor}>
                      Samier Uddin Ahammad Shovo
                    </Text>
                  </Text>
                  <Text
                    fontFamily="Amatic SC"
                    fontWeight="bold"
                    color={textColor}
                    mt="20px"
                  >
                    {/* I am a{" "} */}
                    <Text display="inline-flex" color={highlightTextColor}>
                      I am a versatile developer proficient in software
                      engineering, full-stack web development using Node.js,
                      Django & Laravel , Flutter app development, and Machine
                      Learning.
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Skeleton
                height={loadedDashboardimg ? "100%" : "50%"}
                isLoaded={loadedDashboardimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={dashboardimg}
                  alt="dashboard"
                  effect="blur"
                  onLoad={() => setloadedDashboardimg(true)}
                />
              </Skeleton>
            </Flex>
          </Grid>
        </Flex>

        <Flex direction="column" justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            border="none"
            textAlign="center"
            cursor="default"
            mt="20px"
          >
            My Favorite Quote
            <Box
              fontSize={{ sm: "1em", md: "1.3em", xl: "1.3em" }}
              color={highlightTextColor}
              cursor="default"
            >
              {quote ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(quote).start();
                  }}
                />
              ) : (
                <span>|</span>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
