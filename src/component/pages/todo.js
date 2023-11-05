import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button, Form, InputGroup } from "react-bootstrap";

function ToDo() {
  const [academicTasks, setAcademicTasks] = useState([]);
  const [workTasks, setWorkTasks] = useState([]);
  const [academicArchivedTasks, setAcademicArchivedTasks] = useState([]);
  const [workArchivedTasks, setWorkArchivedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState({ index: -1, value: "" });
  const [currentMode, setCurrentMode] = useState("Academic"); // Default mode

  const addTask = () => {
    if (newTask.trim() !== "") {
      if (currentMode === "Academic") {
        setAcademicTasks([...academicTasks, { text: newTask, isEditing: false }]);
      } else if (currentMode === "Work") {
        setWorkTasks([...workTasks, { text: newTask, isEditing: false }]);
      }
      setNewTask("");
    }
  };

  const editTask = (index) => {
    const tasks = currentMode === "Academic" ? academicTasks : workTasks;
    const newValue = window.prompt("Edit the task:", tasks[index].text);
    if (newValue !== null) {
      const updatedTask = tasks.slice();
      updatedTask[index] = { text: newValue, isEditing: false };
      if (currentMode === "Academic") {
        setAcademicTasks(updatedTask);
      } else if (currentMode === "Work") {
        setWorkTasks(updatedTask);
      }
    }
  };

  const saveTask = (index) => {
    const tasks = currentMode === "Academic" ? academicTasks : workTasks;
    const updatedTask = tasks.slice();
    updatedTask[index] = { text: editingTask.value, isEditing: false };
    if (currentMode === "Academic") {
      setAcademicTasks(updatedTask);
    } else if (currentMode === "Work") {
      setWorkTasks(updatedTask);
    }
    setEditingTask({ index: -1, value: "" });
  };

  const deleteTask = (index) => {
    const tasks = currentMode === "Academic" ? academicTasks : workTasks;
    const updatedTask = tasks.filter((_, i) => i !== index);
    if (currentMode === "Academic") {
      setAcademicTasks(updatedTask);
    } else if (currentMode === "Work") {
      setWorkTasks(updatedTask);
    }
  };

  const finishTask = (index) => {
    const tasks = currentMode === "Academic" ? academicTasks : workTasks;
    const taskToFinish = tasks[index];
    const updatedTask = tasks.filter((_, i) => i !== index);
    if (currentMode === "Academic") {
      setAcademicTasks(updatedTask);
      setAcademicArchivedTasks([...academicArchivedTasks, taskToFinish.text]);
    } else if (currentMode === "Work") {
      setWorkTasks(updatedTask);
      setWorkArchivedTasks([...workArchivedTasks, taskToFinish.text]);
    }
  };

  return (
    <Container fluid className="vh-100" style={{ padding: "2em" }}>
      <Row className="h-100">
        <Col md={12} className="text-center">
          <Button
            variant={currentMode === "Academic" ? "primary" : "light"}
            onClick={() => setCurrentMode("Academic")}
            style={{ margin: "1em" }}
          >
            Academic
          </Button>
          <Button
            variant={currentMode === "Work" ? "success" : "light"}
            onClick={() => setCurrentMode("Work")}
            style={{ margin: "1em" }}
          >
            Work
          </Button>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-between">
          <Card className="mb-3">
            <Card.Header as="h5" className="bg-primary text-white text-center">
              To-Do List - {currentMode} Mode
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="newTask">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder={`Add a new ${currentMode} task`}
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                    />
                    <Button variant="success" onClick={addTask} style={{ margin: "1em", padding: "0.75em 2.5em" }}>
                      Add Task
                    </Button>
                  </InputGroup>
                </Form.Group>
              </Form>
            </Card.Body>
            <ListGroup variant="flush">
              {(currentMode === "Academic" ? academicTasks : workTasks).map((task, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between">
                  {task.isEditing ? (
                    <Form.Control
                      type="text"
                      value={editingTask.value}
                      onChange={(e) => setEditingTask({ ...editingTask, value: e.target.value })}
                    />
                  ) : (
                    task.text
                  )}
                  <div>
                    {task.isEditing ? (
                      <Button variant="success" size="sm" onClick={() => saveTask(index)} style={{ margin: "0.25em", padding: "0.75em 2.5em" }}>
                        Save
                      </Button>
                    ) : (
                      <Button variant="primary" size="sm" onClick={() => editTask(index)} style={{ margin: "0.25em", padding: "0.75em 2.5em" }}>
                        Edit
                      </Button>
                    )}
                    <Button variant="danger" size="sm" onClick={() => deleteTask(index)} style={{ margin: "0.25em", padding: "0.75em 2.5em" }}>
                      Delete
                    </Button>
                    <Button variant="success" size="sm" onClick={() => finishTask(index)} style={{ margin: "0.25em", padding: "0.75em 2.5em" }}>
                      Finish
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={6} className="d-flex flex-column">
          <Card className="mb-3">
            <Card.Header as="h5" className="bg-success text-white text-center">
              Finished Tasks - {currentMode} Mode
            </Card.Header>
            <ListGroup variant="flush">
              {(currentMode === "Academic" ? academicArchivedTasks : workArchivedTasks).map((task, index) => (
                <ListGroup.Item key={index}>{task}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ToDo;
