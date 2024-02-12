import Project from "./project";
import Todo from "./todo";

class App {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  getCurrentProject() {
    return this.projects[0];
  }

  createProject(title) {
    const newProjectId = this.projects.length;
    const newProject = new Project(title, newProjectId);
    this.projects.push(newProject);
  }

  deleteProject(projectId) {
    this.projects.splice(projectId, 1);
  }

  editProject(id, updates) {
      for (const [key, value] of Object.entries(updates)) {
        this.projects[id][key] = value;
      }
  } 

  createTodo(title, description, dueDate, priority) {
    const newTodoId = this.getCurrentProject().todoList.length;
    const newTodo = new Todo(newTodoId, title, description, dueDate, priority);
    this.getCurrentProject().addTodo(newTodo);
  }

  deleteTodo(projectId, todoId) {
    this.projects[projectId].todoList.splice(todoId, 1);
  }

  editTodo(projectId, todoId, updates) {
    for (const [key, value] of Object.entries(updates)) {
      this.projects[projectId].todoList[todoId][key] = value;
    }
  }
}

export default App;
