// MarketSnapshotNav/MarketSnapshotNav.js
import React from 'react';
import {
  MarketSnapshotNavContainer,
  MarketSnapshotNavList,
  MarketSnapshotNavItem,
  MarketLink
} from './MarketSnapshotNavStyles';

const MarketSnapshotNav = () => {
  return (
    <MarketSnapshotNavContainer>
      <div>
        <p>MARKET SNAPSHOT</p>
        <time className="date">6:07 AM</time>
      </div>
      <MarketSnapshotNavList>
        <MarketSnapshotNavItem>
          <MarketLink href="#">Features</MarketLink>
        </MarketSnapshotNavItem>
        <MarketSnapshotNavItem>
          <MarketLink href="#">Americas</MarketLink>
        </MarketSnapshotNavItem>
        <MarketSnapshotNavItem>
          <MarketLink href="#">Europe</MarketLink>
        </MarketSnapshotNavItem>
        <MarketSnapshotNavItem>
          <MarketLink href="#">Asia</MarketLink>
        </MarketSnapshotNavItem>
        <MarketSnapshotNavItem>
          <MarketLink href="#">Commodities</MarketLink>
        </MarketSnapshotNavItem>
      </MarketSnapshotNavList>
    </MarketSnapshotNavContainer>
  );
};

export default MarketSnapshotNav;
