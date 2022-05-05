import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#0093E9" : "transparent")};
  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  align-items: center;
  padding: 0 24px;
  max-width: 1400px;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: absolute;
    display: block;
    right: 0;
    margin-bottom: 40px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  align-items: center;
  margin-right: -10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "CandyCustom", Verdana, Tahoma;
`;

export const ConnectButton = styled(LinkR)`
  border-radius: 50px;
  border: 2px solid transparent;
  background: #ffffff;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px  48px" : "14px 30px")};
  color: ${({ dark }) => (dark ? "#FFFFFF" : "#fff")};
  color: #000000;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "20px")};
  cursor: pointer;
  display: flex;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "CandyCustom", Verdana, Tahoma;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(45deg, white, blue) border-box;
    color: #ffffff;
  }
`;
