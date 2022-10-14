import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Banner";
function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Emircan", phone_number: "1234565789" },

    { fullname: "Ela", phone_number: "987654321" },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="container">
      <Banner />
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
