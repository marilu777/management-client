import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

function ProjectDetails() {
    const [project, setProject] = useState(null)

    const {id} = useParams();
    console.log(project)
    const getProject = async () => {
        try {
            let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${id}`);
            setProject(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getProject();
    }, [])

  return (
    <div className='ProjectDetails'>ProjectDetails
        {project && (
            <>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {project.tasks.map((task) => (
                <li className='TaskCard card' key={task._id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </li>
            ))}
            </>
             )}       
            <Link to={`/projects/edit/${id}`}>
            <button>Edit Project</button>
            </Link>
            <Link to="/projects">
            <button>Go back</button>
            </Link>

    </div>
  )
}

export default ProjectDetails