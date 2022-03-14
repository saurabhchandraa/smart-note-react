import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import AuthContext from "../../context/auth-context";
import { getCurrentUser } from "../../services/AuthService";

const UserProfile = () => {
  const ctx = useContext(AuthContext);
  const user = getCurrentUser();
  console.log(user.firstName);

  return (
    <Card className="mt-5" border="primary">
      <Card.Header as="h2" style={{backgroundColor: '#424242', color: 'white'}}>User Profile</Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="d-flex gap-5">
            <div className="me-auto fw-bold">Email:</div>
            {user.email}
          </ListGroupItem>
          <ListGroupItem className="d-flex gap-5">
            <div className="me-auto fw-bold">Username:</div>
            {user.username}
          </ListGroupItem>
          <ListGroupItem className="d-flex gap-5">
            <div className="me-auto fw-bold">First Name:</div>
            {user.firstName}
          </ListGroupItem>
          <ListGroupItem className="d-flex gap-5">
            <div className="me-auto fw-bold">Last Name:</div>
            {user.lastName}
          </ListGroupItem>
          <ListGroupItem className="d-flex gap-5">
            <div className="me-auto fw-bold">Role:</div>
            {user.roles &&
              user.roles.map((role: any, index: number) => (
                <ul key={index}>{role}</ul>
              ))}
          </ListGroupItem>
          <Button onClick={ctx.onLogout} href ="/login" style={{backgroundColor: '#0c5497', border: '1px solid #bb2207'}}>Logout</Button>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default UserProfile;
