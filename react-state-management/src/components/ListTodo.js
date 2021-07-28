import React from 'react'
import { ListItem, ListItemText, ListItemIcon, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
const ListTodo = ({todo}) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox/>
      </ListItemIcon>
      <ListItemText primary={todo.todo}/>
      <ListItemSecondaryAction>
        <IconButton>
          <Edit color="primary"/>
        </IconButton>
        <IconButton>
          <Delete color="secondary"/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default ListTodo
