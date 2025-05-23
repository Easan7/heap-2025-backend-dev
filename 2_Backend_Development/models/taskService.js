const supabase = require("./connection");

// Exercise 3: Updating your routes to use DB
// - Use Supabase to fetch and manipulate data instead of hardcoded data

// Completed example
const getAllTasks = async () => {
    return await supabase.from("tasks").select("*");
};

const createNewTask = async (req, res) => {
    return await supabase.from('tasks').insert(newTask).select();
};

// TODO: Implement getDoneTasks to fetch tasks where done is true
const getDoneTasks = async (req, res) => {
    return await supabase.from("tasks").select("*").eq("done", true);
};

// TODO: Implement getToDoTasks to fetch tasks where done is false
const getToDoTasks = async (req, res) => {
    return await supabase.from("tasks").select("*").eq("done", false);
};

// TODO: Implement updateTaskStatus to toggle task done status to opposite
const updateTaskStatus = async (req, res) => {
    return await supabase.from("tasks").update({done}).eq('id', id).select();
};

// TODO: Implement findTasksByTitle to search tasks by title substring
const findTasksByTitle = async (req, res) => {
    return await supabase.from("tasks").select("*").ilike("title", '%${query}%')
};

module.exports = {
    getAllTasks,
    createNewTask,
    getDoneTasks,
    getToDoTasks,
    updateTaskStatus,
    findTasksByTitle,
};