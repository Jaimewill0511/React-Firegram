import React , {useState} from 'react'
import ProgressBar from '../comps/ProgressBar'

const Form = () => {
    const [file, setfile] = useState(null);
    const [error, seterror] = useState(null)
    const types = ['image/png', 'image/jpeg'];
    const handleChange =(e)=>{
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)){
            setfile(selected)
            seterror(null)
        } else{
            setfile(null)
            seterror('Please select an image file (png or jpeg)');
        }
        
    }
return (
        <form>
        <label>
        <input type='file' onChange={handleChange}/>
        <span>+</span>
        </label>
            <div className="output">
                {error && <div className='error'>{error}</div>}
                {file && <div className='error'>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setfile}/>}


            </div>
        </form>
    )
}

export default Form
