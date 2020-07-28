import React from "react";

import Button from '../../../Button'

export default function ButtonLink({ children, className, href }) {
  return (
    <Button className={className} href={href}>
      {" "}
      {children}
    </Button>
  );
}
