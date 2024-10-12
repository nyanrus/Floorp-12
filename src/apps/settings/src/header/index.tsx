import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function Header() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue(
    "rgba(255,255,255, 0.7)",
    "rgba(26,32,44, 0.7)",
  );
  const borderColor = useColorModeValue("#eee", "#2D3748");
  const inputBgColor = useColorModeValue("#f1f3f4", "#2D3748");
  const placeholderColor = useColorModeValue("#000000", "#A0AEC0");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mb={4}
      top={"0px"}
      padding={"10px 2.5px"}
      position={"fixed"}
      width={"100%"}
      backgroundColor={bgColor}
      backdropFilter={"blur(10px)"}
      zIndex={1000}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Image
        src={"chrome://branding/content/about-logo@2x.png"}
        boxSize="48px"
        ml={1}
        mr={2}
        alt="ロゴ"
      />
      <Text py={0} fontSize="2xl" pr={10}>
        Settings
      </Text>
      <HStack spacing={2} maxW={"100%"} flex="1 1 auto">
        <form onSubmit={handleSearch} style={{ width: "100%" }}>
          <InputGroup
            borderRadius={"8px"}
            maxW={"750px"}
            bg={inputBgColor}
            border={"1px solid transparent"}
          >
            <InputLeftElement pointerEvents="none">
              <IconIcRoundSearch
                style={{ fontSize: "20px", color: "currentColor" }}
              />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search Settings"
              _placeholder={{ color: placeholderColor }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
        </form>
      </HStack>
      <Spacer />
      <IconButton
        icon={
          <IconLineMdLightDark
            style={{ fontSize: "16px", color: "currentColor" }}
          />
        }
        aria-label="Dark Mode"
        onClick={toggleColorMode}
        mx={4}
      />
    </Flex>
  );
}

export default Header;
