
import {useState} from 'react';
import axios from 'axios';


function AddProject({getProjects}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    const handleTitle = (e) => setTitle(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // gather the values to create the projects (title and description)
        const body = {title, description}

        // axios.post
        axios.post(`${process.env.REACT_APP_API_URL}/api/projects`, body)
        .then (() => {
            getProjects()
        })
        .catch((err) => console.log(err));
        
        setTitle('');
        setDescription('');
    };

  return (
    <div className='AddProject'>
        <h3>Add Project</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name='title' id='title' value={title} onChange={handleTitle}/>

            <label htmlFor="description">Description</label>
            <input type="text" name='description' value={description} onChange={handleDescription}/>

            <button type='submit'>Add Project</button>
        </form>

    </div>
  )
}

export default AddProject