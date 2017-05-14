# Front­end developer exercise

check the live version [here](http://rohit-exercise.surge.sh/#/)

### Tech stack

- **Vue** -  frontend/view framework
- **vue-router** - official router for vue

### Setup and Run

- `$ git clone https://github.com/rohitdaryanani/exercise.git && cd exercise ` will download the app, and cd to the folder once done.

- install dependencies
npm install

- serve with hot reload at localhost:8080
npm run dev


### Project Specs

![](https://cl.ly/1c000X0E0j1u/Image%202017-05-14%20at%2010.04.22%20PM.png)

![](https://cl.ly/0i263s2b3m1M/Image%202017-05-14%20at%2010.04.40%20PM.png)

1. List out the Vue components required, and their specification.
```
    Todo
        - Props: project[String]
        - Events emitted: addTodo, removeTodo
        - State: todoItem[String], categories[Object], 
        - computed: selectedProject[Array]
    Home
        - State: message[String]

```

2. Suggest the format of the JSON object that specifies the application state in each design
```
    intial state
    {
        todoItem: '',
        categories: {
            family: ['wash clothes','buy milk','sweep floor'],
            school: ['do homework','read books'],
            exercise: ['lift weights','drink protein shake']
        },
        selectedProject[: []
    }

    routechange/project selected state //selected family
    {
        todoItem: '',
        categories: {
            family: ['wash clothes','buy milk','sweep floor'],
            school: ['do homework','read books'],
            exercise: ['lift weights','drink protein shake']
        },
        selectedProject: ['wash clothes','buy milk','sweep floor']
    }
```