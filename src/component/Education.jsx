import { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

function Education({education, setEducation} ){

    const [open, setOpen] = useState(false);
    const handleOpen = (open) => {
        setOpen((open) => !open);
    }

    const handleEducationAdd = () => {
        setEducation([...education, { school:"",
                                    location:"",
                                    degree:"",
                                    startDate: "",
                                    endDate: "",
                                    }])
      }

      const handleEducationRemove = (index) => {
        const list = [...education];
        list.splice(index, 1);
        setEducation(list);
    
      }

    
      const handleEducationChange = (e, index) => {
        e.preventDefault();
        const {name, value} = e.target;
        const list = [...education];
        list[index][name] = value;
        setEducation(list);
    
      }


    return(
        <div className="menu">
            <div className="ddBtn">
                <div className='ddTitle'>
                <i class="bi bi-mortarboard-fill"></i>
                    <p className='titles'>Education</p>
                </div>
                <i className='arrow' onClick={handleOpen}>{open ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i> }</i>
            </div>

            <div className={`content-closed ${open ? "content-open" : null}`} >
                <form className='education-content'>
                    <div className='form-field'>
                        {education.map((singleEducation, index) =>
                        <div key={index} className='education-form'>
                            <div className='inputBox'>
                                <div className='remove-text'>
                                    <label for="school">School Name</label>
                                    {education.length > 1 && 
                                        (<button type="button" onClick={() => handleEducationRemove(index)}>Remove</button>)}                                
                                </div>
                                
                                <input type="text" name="school" id="school" placeholder="Enter school`s name" value={singleEducation.school} onChange={(e) => handleEducationChange(e, index)}/>
                            </div>


                            <div className='inputBox'>
                                <label for="location">Location</label>
                                <input type="text" name="location" id="location" placeholder="Enter location" value={singleEducation.location} onChange={(e) => handleEducationChange(e, index)}/>
                            </div>

                            <div className='inputBox'>
                                <label for="degree">Degree</label>
                                <input type="text" name="degree" id="degree" placeholder="Degree" value={singleEducation.degree} onChange={(e) => handleEducationChange(e, index)}/>
                            </div>
                            
                            <div className='date'>
                                <div>
                                    <label for="start">Start Date</label>
                                    <input type="text" name='startDate' id='startDate' placeholder='MM/YY' value={singleEducation.startDate} onChange={(e) => handleEducationChange(e, index)}/>
                                </div>
                                <div>
                                    <label for="end">End date</label>
                                    <input type="text" name="endDate" id="endDate"  placeholder='MM/YY' value={singleEducation.endDate} onChange={(e) => handleEducationChange(e, index)}/>
                                </div>

                                
                            </div>
                            {education.length > 1 && (<hr/>)}

                            {education.length - 1 === index && education.length < 5 
                                && (
                                <button type='button' className='buttons' onClick={handleEducationAdd}>
                                    <span>Add school</span>
                                </button>)}


                        
                        </div>
                         )}
                        

                    </div>


                </form>
                
                

                
            </div>

           
            

        </div>
        
        
    )

}

export default Education
