        let arrayOfTodos;
        let listItems;
        let lis;
        let userIDList;
        let idInput;
        let array;
        
        const fetchTodos = () => {
          fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => (arrayOfTodos = data));
        };
        
        const logTodos = () => {
          console.log(arrayOfTodos);
        };
        const populateTodos = () => {
          let orderedList = document.getElementById("todo-list");
          arrayOfTodos.forEach((todo) => {
            listItems = document.createElement("li");
            const titleToDo = todo.title;
            listItems.innerHTML = `${titleToDo}`;
            orderedList.appendChild(listItems);
          });
        };
        
        const userID = (id) => {
          lis = document.querySelectorAll("li");
          lis.forEach((li) => li.parentNode.removeChild(li));
          idInput = +document.querySelector("#quantity").value;
          // console.log(idInput);
          let orderedList = document.getElementById("todo-list");
          userIDList = arrayOfTodos.filter((todo) => todo.userId === idInput);
          // console.log(userIDList);
          // console.log(typeof idInput);
          userIDList.forEach((todo) => {
            listItems = document.createElement("li");
            const titleToDo = todo.title;
            // console.log(titleToDo);
            listItems.innerHTML = `${titleToDo}`;
            orderedList.appendChild(listItems);
          });
        };
        
        const completedTodos = () => {
          lis = document.querySelectorAll("li");
          lis.forEach((li) => li.parentNode.removeChild(li));
          let orderedList = document.getElementById("todo-list");
          if (idInput === undefined) {
            array = arrayOfTodos;
          } else array = userIDList;
          // console.log(array);
          const completedTasks = array.filter((todo) => todo.completed === true);
          // console.log(completedTasks);
          completedTasks.forEach((todo) => {
            listItems = document.createElement("li");
            const titleToDo = todo.title;
            // console.log(titleToDo);
            listItems.innerHTML = `${titleToDo}`;
            orderedList.appendChild(listItems);
          });
        };
        const incompleteTodos = () => {
          lis = document.querySelectorAll("li");
          lis.forEach((li) => li.parentNode.removeChild(li));
          let orderedList = document.getElementById("todo-list");
          if (idInput === undefined) {
            array = arrayOfTodos;
          } else array = userIDList;
          // console.log(array);
        
          const incompleteTasks = array.filter((todo) => todo.completed === false);
          incompleteTasks.forEach((todo) => {
            listItems = document.createElement("li");
            const titleToDo = todo.title;
            // console.log(titleToDo);
            listItems.innerHTML = `${titleToDo}`;
            orderedList.appendChild(listItems);
          });
        };

