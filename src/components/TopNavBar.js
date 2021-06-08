import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import Button from "./Button";
import { breakpoints } from "./breakpoints";

const StyledTopNavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem var(--side-padding);
`;

const LogoContainer = styled.div`
  flex: 20%;
`;
const MenuBox = styled.nav`
  flex: 50%;
  text-align: center;

  @media (max-width: ${breakpoints.lg_end}) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  padding: 0.875rem 1rem;
  border: 1px solid var(--orange);
  background-color: #ffecec;
  color: var(--orange);
  border-radius: 10px;
  font-size: 1rem;

  @media (max-width: ${breakpoints.lg_end}) {
    display: block;
  }
`;

const CTAsBox = styled.div`
  flex: 30%;
  text-align: right;

  > * {
    &:last-child {
      margin-left: 1rem;
    }
  }

  @media (max-width: ${breakpoints.lg_end}) {
    display: none;
  }
`;

export default function TopNavBar() {
  return (
    <StyledTopNavBar>
      <LogoContainer>
        <img src={logo} alt="LaslesVPN logo" />
      </LogoContainer>

      <MenuButton>Menu</MenuButton>

      <MenuBox>
        <Button>About</Button>
        <Button>Features</Button>
        <Button>Pricing</Button>
        <Button>Testimonials</Button>
        <Button>Help</Button>
      </MenuBox>

      <CTAsBox>
        <Button alternate>Sign In</Button>
        <Button secondary>Sign Up</Button>
      </CTAsBox>
    </StyledTopNavBar>
  );
}
