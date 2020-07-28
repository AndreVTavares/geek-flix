import React from "react";
import { Link } from 'react-router-dom';

import Button from "../../../Button";

export default function ButtonLink({ children, className, href }) {
  return (
    <Button as={Link}className={className} to={href}>
      {" "}
      {children}
    </Button>
  );
}
