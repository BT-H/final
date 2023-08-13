// from s3 no original code included
import { useMemo } from "react";
import { Card } from "react-bootstrap";

function CustomCard(props) {
  return (
    <Card
      style={{ width: "30vw", minWidth: "18rem", maxWidth: "35rem" }}
      className={{ ...props.className }}
    >
      <Card.Body>
        <Card.Title>{props.header && props.header}</Card.Title>
        <Card.Text>
          {props.title && (
            <h5 className="card-title text-uppercase">{props.title}</h5>
          )}
          {props.text && <p className="card-text">{props.text}</p>}
          {props.body}
          {props.status && (
            <div id="createStatus" className="text-secondary mt-3">
              {props.status}
            </div>
          )}
        </Card.Text>
        {props.children}
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
