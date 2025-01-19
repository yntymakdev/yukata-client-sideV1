import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren<unknown>) => {
  return <div>{children} </div>;
};

export default layout;
