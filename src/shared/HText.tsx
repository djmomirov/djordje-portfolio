import React from "react";

type Props = {
  children: React.ReactNode;
};

function HText({ children }: Props) {
  return (
    <h1 className="text-3xl font-bold basis-3/5 font-montserrat">{children}</h1>
  );
}

export default HText;
