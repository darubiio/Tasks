import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

export const AddButton = ({ listMode }) => {

  return (
    <InputGroup>
      <Button variant="outline-success">
        <i className={ listMode ? "bi bi-plus-square-dotted" : "bi bi-plus-circle-dotted" }></i>
      </Button>
      <FormControl
        placeholder={ listMode ? "New List" : "Add Task" }
        className="border-dark"
      />
    </InputGroup>
  )
}