import React from "react";
import { Container } from "reactstrap";
import TableRow from "./TableRow";

const Table = (props) => {
  const { caseObj } = props;

  return (
    <div>
      <Container>
        <TableRow caseObj={caseObj} />
      </Container>
    </div>
  );
};

export default Table;
