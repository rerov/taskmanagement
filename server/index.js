// IMPORT REQUIRED PACKAGES
const express = require('express') 
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// CREATE THE APPLICATION 
const app = express()
const port = process.env.PORT || 8000 

// CONNECT DATABASE 
mongoose.connect('mongodb://localhost/', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Successfully connected to the DB.'))
    .catch((err) => console.log('A problem occured during the connection to DB.', err))

// CREATE TASK SCHEMA & MODEL USING MONGOOSE

const taskSchema =  new mongoose.Schema({
    title: String, 
    description: String, 
    completed: Boolean
});

const Task = mongoose.model('Task', taskSchema);

// MIDDLEWARE 

app.use(bodyParser.json())

// CREATE A NEW TASK 

app.post('/api/tasks', async(req, res) => {
    try {
        const task = new Task(req.body)
        await task.save()
        res.status(201).json(task)
    } catch (error) {
        res.status(400).json({message: 'failed to create the task', error: error})
        
    }
})

// ALL TASKS 

app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.status(400).json({message: 'a problem occured', error: error})
    }
})


// GET TASK BY ID 

app.get('/api/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if(!task){
            return res.status(404).json({message: 'no task with this id'})
        }
        res.json(task)
    } catch (error) {

        res.status(500).json({message: 'an error occured', error: error})
        
    }
})


// UPDATE THE TASK BY ID 

app.put('/api/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!task) {
            return res.status(400).json('task not found')
        }
        res.json(task)
    } catch (error) {
        res.status(500).json({message: 'an error occured while updating', error: error})
        
    }
})


// DELETE THE TASK BY ID 

app.delete('/api/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(400).json({message: 'No Task With Given ID'})
        }
        res.json({message: 'Task deleted successfully'})
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
        
    }
})



// START THE SERVER 

app.listen(port, () => {
    console.log(`Server is running on port number ${port}`)
})

