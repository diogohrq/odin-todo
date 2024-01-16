import App from "./js/app";

const app = new App();

// app.addProject('Test Project', app.getProjects)
app.createProject('Test')
app.createTodo('Go to sleep', 'Have a good night of sleep!', '22:30', 'high')
app.editProject(0, {title: 'New Cool Title'})
// console.log(app.getProjects()[0])