import React, { Component, Fragment, ReactNode } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

interface ILayoutProps {
  children: ReactNode;
}

interface ILayoutState {
  isOpen: boolean;
}

export default class Example extends React.Component<ILayoutProps, ILayoutState> {
  constructor(props: ILayoutProps) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  public toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  public render() {
    // TODO : Remove hrefs;
    return (
      <div>
        <Navbar color="light" light={true} expand="md">
          <NavbarBrand href="/">DomeTrade</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink href="/">Auction house</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">My items</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">My purchases</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right={true}>
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem divider={true} />
                  <DropdownItem>Log out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
