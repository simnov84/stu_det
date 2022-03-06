import "./App.css";
import React, { useState, Fragment } from "react";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: "",
    name: "",
    age: "",
    grade: "",
    phone: "",
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    age: "",
    grade: "",
    phone: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: addFormData.id,
      name: addFormData.name,
      age: addFormData.age,
      grade: addFormData.grade,
      phone: addFormData.phone,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      // id: nanoid(),
      id: editFormData.id,
      name: editFormData.name,
      age: editFormData.age,
      grade: editFormData.grade,
      phone: editFormData.phone,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      id: contact.id,
      name: contact.name,
      age: contact.age,
      grade: contact.grade,
      phone: contact.phone,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <h1 className="title">Student Details</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>GRADE</th>
              <th>PHONE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Student</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="number"
          name="id"
          required="required"
          placeholder="Enter an id..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="age"
          required="required"
          placeholder="Enter an age..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="grade"
          required="required"
          placeholder="Enter a grade..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="phone"
          required="required"
          placeholder="Enter a phone no..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
