import React, { useState } from "react";

function Todoaddeditdelete() {
  const [todo, setTodo] = useState({ todoData: "", index: "" });
  const [todoList, setTodoList] = useState([]);

  const handleTodoList = () => {
    if (todo?.todoData && todo.index === "") {
      setTodoList((pre) => {
        return [...pre, todo.todoData];
      });
    } else {
      todoList?.splice(todo.index, 1, todo.todoData);
      setTodoList([...todoList]);
    }
    setTodo({ todoData: "", index: "" });
  };

  const handleEdit = (data, ind) => {
    setTodo({ todoData: data, index: ind });
  };

  const handleDelete = (index) => {
    setTodoList((pre) => {
      return pre?.filter((x, ind) => ind !== index);
    });
  };
  return (
    <div>
      <div>
        <input
          placeholder="Add Your New Todo"
          name="todo"
          value={todo.todoData}
          onChange={(e) =>
            setTodo((pre) => ({ ...pre, todoData: e.target.value }))
          }
        />
        <button type="button" onClick={handleTodoList}>
          +
        </button>
      </div>
      <div>
        {todoList?.map((y, ind) => {
          return (
            <div key={ind}>
              <span>{y}</span>
              <button type="button" onClick={() => handleEdit(y, ind)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(ind)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todoaddeditdelete;
