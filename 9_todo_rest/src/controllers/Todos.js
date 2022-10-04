const db = require('../config/db');

class TodoController {
    //Get Todos
    static async getTodos(req, res) {
        try {
            let results = await db.query('SELECT * FROM todos');
            return res.render('home', { todos: results.rows });
        } catch (error) {
            return res.send(error);
        }
    }

    //Add Todos
    static async createTodo(req, res) {
        try {
            const title = req.body.title;
            let results = await db.query(
                `INSERT INTO todos (title,checked) VALUES ($1, $2)`, [title, false]);
            res.cookie("context", "myContext", { httpOnly: true });
            return res.redirect('/');
        } catch (error) {
            return res.send(error);
        }
    }

    //Update Todos
    static async updateTodo(req, res) {
        try {
            const todoId = req.params.todoId;
            const newChecked = req.body.checked;
            let findTodoById = await db.query(
                `SELECT * FROM todos WHERE id = $1`, [parseInt(todoId)]);

            if (findTodoById.rows[0]) {
                await db.query(`UPDATE todos SET checked=$1 WHERE id = $2`, [!findTodoById.rows[0].checked, parseInt(todoId)]);
                return res.send("Berhasil Update");
            } else {
                return res.send("Id tidak ditemukan");
            }
        } catch (error) {
            return res.send(error);
        }
    }

    //Delete Todos
    static async deleteTodo(req, res) {
        try {
            const todoId = req.params.todoId;
            await db.query(`DELETE FROM todos WHERE id = $1`, [parseInt(todoId)]);

            return res.render('home', { todos: results.rows });
        } catch (error) {
            return res.send(error);
        }
    }
}

module.exports = TodoController;