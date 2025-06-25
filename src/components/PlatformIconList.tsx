import {
  FaApple,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaAddressBook
} from "react-icons/fa";
import { SiAtari, SiSega, SiNeovim, SiCommodore, SiD3Dotjs } from "react-icons/si";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";


interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    atari: SiAtari,
    sega: SiSega,
    "commodore-amiga": SiCommodore,
    "3do": SiD3Dotjs, 
    "neo-geo": SiNeovim, 
    };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
