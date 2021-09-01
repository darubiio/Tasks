import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

export const NewLBttn = () => {
  return (
      <ListGroup className="mt-auto">
        <Button className="mt-3 text-start text-black" variant="outline-success">
          <i class="bi bi-plus-square-dotted m-2"></i>
          New list
        </Button>
      </ListGroup>
  )
};