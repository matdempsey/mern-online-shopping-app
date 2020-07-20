import React from "react";
import {
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  Nav,
} from "reactstrap";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="nav-bar-container">
      <Navbar>
        <Nav>
          <NavItem>Nav Item 1</NavItem>
          <NavItem>Nav Item 2</NavItem>
          <NavItem>Nav Item 3</NavItem>
          <UncontrolledDropdown>
            <DropdownToggle caret>options</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
              <DropdownItem>Item 3</DropdownItem>
              <DropdownItem>Item 4</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
