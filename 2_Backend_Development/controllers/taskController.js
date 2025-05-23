const service = require("../models/taskService");

// Exercise 4: Building your controller functions 
// Implement the functionalities for each of the following routes
// - GET all tasks
// - POST new task
// - GET done tasks
// - GET to-do tasks
// - PUT update task status by ID
// - POST search tasks by title

// - Use Supabase to fetch and manipulate data
// - Implement the functions in taskController.js to interact with Supabase
// - Handle errors appropriately and send responses back to the client

// Completed example
const getAllTasks = async (req, res) => {

    // Fetch all tasks from the database using supabase
    const { data, error } = await service.getAllTasks();
    if (error) {
        // Send a 500 status code if response is not successful from supabase with message
        return res.status(500).json({ message: "Error fetching tasks", error });
    }
    // Return the tasks to the client with a 200 status code
    return res.status(200).json(data);
};

// TODO: Implement createNewTask to add a new task
const createNewTask = async (req, res) => {
      // Fetch all tasks from the database using supabase
    const { data, error } = await service.createNewTask();
    if (error) {
        // Send a 500 status code if response is not successful from supabase with message
        return res.status(500).json({ message: "Error creating tasks", error });
    }
    // Return the tasks to the client with a 200 status code
    return res.status(201).json(data);
};

// TODO: Implement getDoneTasks to fetch tasks where done is true
const getDoneTasks = async (req, res) => {
      // Fetch all tasks from the database using supabase
    const { data, error } = await service.getDoneTasks();
    if (error) {
        // Send a 500 status code if response is not successful from supabase with message
        return res.status(500).json({ message: "Error fetching tasks", error });
    }
    // Return the tasks to the client with a 200 status code
    return res.status(201).json(data);
};

// TODO: Implement getToDoTasks to fetch tasks where done is false
const getToDoTasks = async (req, res) => {
      // Fetch all tasks from the database using supabase
    const { data, error } = await service.getToDoTasks();
    if (error) {
        // Send a 500 status code if response is not successful from supabase with message
        return res.status(500).json({ message: "Error fetching tasks", error });
    }
    // Return the tasks to the client with a 200 status code
    return res.status(201).json(data);
};

// TODO: Implement updateTaskStatus to toggle task done status to opposite
const updateTaskStatus = async (req, res) => {
      // Fetch all tasks from the database using supabase
    const { data, error } = await service.updateTaskStatus();
    if (error) {
        // Send a 500 status code if response is not successful from supabase with message
        return res.status(500).json({ message: "Error fetching tasks", error });
    }
    // Return the tasks to the client with a 200 status code
    return res.status(201).json(data);
};

// TODO: Implement findTasksByTitle to search tasks by title substring
const findTasksByTitle = async (req, res) => {
      // Fetch all tasks from the database using supabase
    const { data, error } = await service.findTasksByTitle();
    if (error) {
        // Send a 500 status code if response is not successful from supabase with message
        return res.status(500).json({ message: "Error fetching tasks", error });
    }
    // Return the tasks to the client with a 200 status code
    return res.status(201).json(data);
};

module.exports = {
    getAllTasks,
    createNewTask,
    getDoneTasks,
    getToDoTasks,
    updateTaskStatus,
    findTasksByTitle,
};