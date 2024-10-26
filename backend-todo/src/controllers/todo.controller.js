import { Todo } from "../models/todo.models.js";

export const addTodo = async (req, res) => {
  try {
    const { title, subTitle, completed, priority, dueDate } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = new Todo({
      title,
      subTitle,
      completed,
      priority,
      dueDate,
    });

    const savedTodo = await newTodo.save();

    return res.status(201).json({
      message: "Todo created successfully",
      todo: savedTodo,
    });
  } catch (error) {
    console.log("error creating todo", error);
    res
      .status(500)
      .json({ message: "Something went wrong while creating a todo" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;
    const todo = await Todo.findByIdAndDelete(id);
    res.json({
      message: "todo deleted successfully",
      todo: todo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id, title, subTitle, completed, priority, dueDate } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, {
      title,
      subTitle,
      completed,
      priority,
      dueDate,
    });
    res.status(201).json({ message: "updated successfully", updatedTodo });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(201).json({ status: "ok", todos });
  } catch (error) {
    console.log(error);
  }
};
