import React from "react";
import styled from "styled-components";
import {
  BusinessNavContainer,
  BusinessNavList,
  BusinessNavItem,
  BusinessNavItemLink,
} from "./BusinessNav.styles.jsx";

const navItems = [
  { text: "Tech", link: "#" },
  { text: "Econ", link: "#" },
  { text: "Media", link: "#" },
  { text: "Money", link: "#" },
  { text: "DealBook", link: "#" },
];

const BusinessNav = () => {
  return (
    <BusinessNavContainer>
      <h2>Business</h2>
      <BusinessNavList>
        {navItems.map((item) => (
          <BusinessNavItem key={item.text}>
            <BusinessNavItemLink href={item.link}>
              {item.text}
            </BusinessNavItemLink>
          </BusinessNavItem>
        ))}
      </BusinessNavList>
    </BusinessNavContainer>
  );
};

export default BusinessNav;
