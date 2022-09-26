import React, { FC } from "react";
import { css } from "@linaria/core";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={parent}>{children}</div>;
};

const parent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
