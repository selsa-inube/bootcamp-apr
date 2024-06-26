import React from "react";
import {
  MarketSnapshotNavContainer,
  MarketSnapshotNavList,
  MarketSnapshotNavItem,
  MarketLink,
} from "./MarketSnapshotNavStyles";

const MarketSnapshotNav = () => {
  const snapshotItems = [
    { text: "Features", link: "#" },
    { text: "Americas", link: "#" },
    { text: "Europe", link: "#" },
    { text: "Asia", link: "#" },
    { text: "Commodities", link: "#" },
  ];

  return (
    <MarketSnapshotNavContainer>
      <div>
        <p>MARKET SNAPSHOT</p>
        <time className="date">6:07 AM</time>
      </div>
      <MarketSnapshotNavList>
        {snapshotItems.map((item) => (
          <MarketSnapshotNavItem key={item.text}>
            <MarketLink href={item.link}>{item.text}</MarketLink>
          </MarketSnapshotNavItem>
        ))}
      </MarketSnapshotNavList>
    </MarketSnapshotNavContainer>
  );
};

export default MarketSnapshotNav;
