import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  Link,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { NavItem } from '../../../lib/NavItems';
import MobileNavItem from './MobileNavItem';

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
export default MobileNav;
