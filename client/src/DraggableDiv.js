import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Accordion, Card, Button, Form } from 'react-bootstrap';

const DraggableDiv = () => {
  const [expanded, setExpanded] = useState({
    question: false,
    query: false,
    query_result: false,
    answer: false,
  });

  const handleExpand = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <Draggable>
      <div className="draggable-div">
        <Accordion>
          {['question', 'query', 'query_result', 'answer'].map((section) => (
            <Card key={section}>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={section}
                  onClick={() => handleExpand(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={section} in={expanded[section]}>
                <Card.Body>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder={`Enter your ${section} here...`}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>
    </Draggable>
  );
};

export default DraggableDiv;