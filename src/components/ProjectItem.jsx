import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProjectItem = (props) => {
  const { img, title, description, link, buttonText } = props;
  return (
    <Card
      id="project-item-card"
      className="glass mx-2 my-4 autoShow text-white"
      style={{
        width: "32rem",
      }}
    >
      <Card.Img variant="top" src={img} />

      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="primary"
          href={link}
          target="_blank"
          className="stretched-link px-4"
					style={{
						width:'fit-content'
					}}
        >
          {buttonText === "deploy"
            ? "View Deployed Project"
            : "View Project on Github"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;
