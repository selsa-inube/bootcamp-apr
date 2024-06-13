import React from 'react';
import { BusinessNavContainer, BusinessNavList, BusinessNavItem, BusinessNavItemLink } from './BusinessNav.styles.jsx';

const BusinessNav = () => {
  return (
    <BusinessNavContainer>
      <h2>Business</h2>
      <BusinessNavList>
        <BusinessNavItem><BusinessNavItemLink href="#">Tech</BusinessNavItemLink></BusinessNavItem>
        <BusinessNavItem><BusinessNavItemLink href="#">Econ</BusinessNavItemLink></BusinessNavItem>
        <BusinessNavItem><BusinessNavItemLink href="#">Media</BusinessNavItemLink></BusinessNavItem>
        <BusinessNavItem><BusinessNavItemLink href="#">Money</BusinessNavItemLink></BusinessNavItem>
        <BusinessNavItem><BusinessNavItemLink href="#">DealBook</BusinessNavItemLink></BusinessNavItem>
      </BusinessNavList>
    </BusinessNavContainer>
  );
};

export default BusinessNav;
 