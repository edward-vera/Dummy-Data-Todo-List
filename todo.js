    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let Todolist = document.getElementById("todo-list")
    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }
]

    console.log(arrayOfTodos[0].userId) // => 14
    console.log(arrayOfTodos[1].userId) // => 20
    console.log(arrayOfTodos[0].id) // => 1
    console.log(arrayOfTodos[1].id) // => 2
    console.log(arrayOfTodos[0].title) // => delectus aut autem
    console.log(arrayOfTodos[1].title) // => delectus aut autem
    console.log(arrayOfTodos[0].completed) // => false
    console.log(arrayOfTodos[1].completed) // => false
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        let newListItem = document.createElement("li")
        let text = document.createTextNode(arrayOfTodos[0].userId)
        newListItem.appendChild(text)
        Todolist.appendChild(newListItem)
        console.log(arrayOfTodos[0].userId)
    }
        // console.log('onlyTitles', onlyTitles)


