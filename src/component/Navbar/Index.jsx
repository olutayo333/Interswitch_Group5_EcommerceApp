import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  //   NavbtnLink,
} from "./NavbarElements";
// import { AiOutlineSearch } from "react-icons/ai";
// import "./index.css";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/feedback">Feedback</NavLink>

          {/* <div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderWidth: "2px",
                  borderColor: "#1a202c",

                  padding: "0.5rem",
                }}
              >
                <button style={{ display: "flex", alignItems: "center" }}>
                  <AiOutlineSearch size={13} />
                </button>
                <input
                  className="placeholder"
                  style={{
                    width: "1000px",
                    fontSize: "0.875rem",
                    paddingLeft: "30px",
                  }}
                  placeholder="search for anything"
                  type="text"
                />
              </div>
            </div>
          </div> */}
          <SearchInput />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
