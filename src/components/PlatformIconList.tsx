import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    linux: FaLinux,
    web: BsGlobe,
  };
  return (
    <HStack marginTop={2}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"}></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;