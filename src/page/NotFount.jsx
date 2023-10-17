import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFount = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={{span: 6, offset: 3}} className="text-center">
          <img style={{ width: "100%" }} src="/img/404-not-found.svg" />
          <h2>Te has perdido?</h2>
          <p>
            Vuelve al <Link to="/">Inicio</Link>{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFount;
