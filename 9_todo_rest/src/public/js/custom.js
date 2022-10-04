// update Todo
function updateTodo(todoId) {
    return $.ajax({
        method:'put',
        url:`/todo/${todoId}`,
        contentType:'application/json',
        cache:false,
        error: err => {
            console.log(err);
        }
    });
}

// delete Todo
function deleteTodo(todoId) {
    return $.ajax({
        method:'delete',
        url:`/todo/${todoId}`,
        contentType:'application/json',
        cache:false,
        success: () => {
            location.reload()
        },
        error: err => {
            console.log(err);
        }
    });
}