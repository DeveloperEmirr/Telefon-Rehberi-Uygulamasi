import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
    item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <input
            className="form-control"
            placeholder="Filter Contact"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          ></input>
        </div>

        <div className="col-12 mt-5 mb-5">
          <ul className="list-group">
            {filtered.map((contact, i) => (
              <strong><li className="list-group-item list-group-item-warning" key={i}>{contact.fullname+"  "+contact.phone_number}</li></strong>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;
