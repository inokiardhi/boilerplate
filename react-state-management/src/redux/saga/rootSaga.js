import { put, takeLatest, all } from 'redux-saga/effects'
import {todosGet} from '../../api/todoAPI';
import {GET_TODOS} from '../reducers/todoReducer'
import {setTodos} from '../actions/todoActions';


function* setTheTodo(){
  const response =  yield todosGet();
  yield put(setTodos(response.data));
}

function* watchTodosFetch(){
  yield takeLatest(GET_TODOS, setTheTodo);
}

export default function* rootSaga(){
  yield all([
    watchTodosFetch(),
  ])
}