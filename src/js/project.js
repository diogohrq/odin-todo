class Project {
  constructor(title, id) {
    this.id = id;
    this.title = title;
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }
}

export default Project;