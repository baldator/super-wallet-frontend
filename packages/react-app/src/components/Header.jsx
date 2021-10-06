import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/LucaSilverhand/super-wallet-frontend.git" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="Super Wallet"
        subTitle="Manage your incoming flow"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
