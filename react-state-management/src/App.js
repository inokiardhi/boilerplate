import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './redux/actions/todoActions';
import { TextField, Container, Divider, makeStyles, Paper, List } from '@material-ui/core';
import ListTodo from './components/ListTodo';


const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))


const App = () => {
  const dispatch = useDispatch()
  const classes = useStyle()
  const todos = useSelector(state => state.todos);
  
  useEffect(()=>{
    dispatch(getTodos());
  },[dispatch])
  const todoList = todos.map(todo => (<ListTodo key={todo.id} todo={todo}/>))
  return (
    <div>
      <Container className={classes.root} component={Paper}>
        <TextField variant="outlined" label="What is todo Today ?" fullWidth/>
        <Divider/>
        <List>
          {todoList}
        </List>
      </Container>
    </div>
  )
}

export default App
