import { Fragment } from "react";

const list1 = ["test item 1", "test item 2", "test item 3"];

function ListGroup() {
  return (
    <Fragment>
      <h1> Test Component </h1>
      <ul className="list-group">
        {list1.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
