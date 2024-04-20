import { FaBars } from "react-icons/fa";
// import { AiOutlineSearch } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  background: #e9f3f6;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 0.5rem;
  justify-content: space-between;
  padding: 0;
  z-index: 12;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #808080;
  float: left;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 60%;
  font-size: 13px;
  border-right: 1px solid #bbb;

  cursor: pointer;
  &.active {
    background-color: white;
    color: #3f1ade;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  border-width: 2px;
  border-color: #1a202c;
  width: 100%;
  padding: 0.5rem;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size:0.875rem;
  padding-left: 0.75rem
  ::placeholder {
    color: #cbd5e0;
  }
  :outline-none:focus {
    outline: none;
  }
`;
