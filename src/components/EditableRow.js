import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="number"
          name="id"
          required="required"
          placeholder="Enter an id..."
          value={editFormData.id}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="age"
          required="required"
          placeholder="Enter an age..."
          value={editFormData.age}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="grade"
          required="required"
          placeholder="Enter a grade..."
          value={editFormData.grade}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="phone"
          required="required"
          placeholder="Enter a phone no..."
          value={editFormData.phone}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
