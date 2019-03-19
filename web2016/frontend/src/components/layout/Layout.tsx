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
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
              {/* <NavItem>
                <NavLink>
                  <Link to="/auction">Auction house</Link>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <Link to="/items">My items</Link>
              </NavItem>
              {/* <NavItem>
                <NavLink>
                  <Link to="/purchases">My purchases</Link>
                </NavLink>
              </NavItem> */}
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
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}
