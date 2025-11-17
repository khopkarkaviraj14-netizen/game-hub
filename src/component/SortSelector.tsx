import { Button, MenuItem } from "@chakra-ui/react";
import { MenuButton, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Menu } from "../../node_modules/@chakra-ui/react/dist/types/components/menu/namespace";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      order by: Relevance
        
      </MenuButton>
      <MenuList>
      <MenuItem>Relevance</MenuItem>
      <MenuItem>Date added</MenuItem>
      <MenuItem>Name</MenuItem>
      <MenuItem>Release date</MenuItem>
      <MenuItem>Popularity</MenuItem>
      <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
