import { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

function WorkData({workList, setWorkList} ){


    
    const [open, setOpen] = useState(false);
    const handleOpen = (open) => {
        setOpen((open) => !open);
    }

    const handleWorkAdd = () => {
        setWorkList([...workList, { company:"",
                                    role:"",
                                    startDate:"",
                                    endDate:"",
                                    description: [],
                                    }])
                                
      }
      const handleWorkRemove = (index) => {
        const list = [...workList];
        list.splice(index, 1);
        setWorkList(list);
    
      }

    
      const handleWorkChange = (e, index) => {
        e.preventDefault();
        const {name, value} = e.target;
        const list = [...workList];
        list[index][name] = value;
        setWorkList(list);
    
      }
     


    return(
        <div className="menu">
            <div className="ddBtn">
                <div className='ddTitle'>
                <i class="bi bi-briefcase-fill"></i>
                    <p className='titles'>Work History</p>
                </div>
                <i className='arrow' onClick={handleOpen}>{open ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i> }</i>
            </div>

            <div className={`content-closed ${open ? "content-open" : null}`} >
                <form className='work-content'>
                    <div className='form-field'>
                        {workList.map((singleWork, index) =>
                        <div key={index} className='work-form'>
                            <div className='inputBox'>
                                <div className='remove-text'>
                                    <label for="company">Company Name</label>
                                    {workList.length > 1 && 
                                        (<button type="button" onClick={() => handleWorkRemove(index)}>Remove</button>)}                                
                                </div>
                                
                                <input type="text" name="company" id="company" placeholder="Enter company`s name" value={singleWork.company} onChange={(e) => handleWorkChange(e, index)}/>
                            </div>


                            <div className='inputBox'>
                                <label for="role">Role</label>
                                <input type="text" name="role" id="role" placeholder="Enter job title" value={singleWork.role} onChange={(e) => handleWorkChange(e, index)}/>
                            </div>

                            <div className='inputBox'>
                                <div className='remove-text'>
                                    <label for="description">Description</label>
                                </div>
                                <textarea type="text" name="description" id="description" cols="30" rows="10" 
                                          placeholder="Job responsibility"  onChange={(e) => handleWorkChange(e, index)}>
                                </textarea>
                                
                            </div>

                            
                            
                            <div className='date'>
                                <div>
                                    <label for="start">Start Date</label>
                                    <input type="text" name='startDate' id='startDate' placeholder='MM/YY' value={singleWork.startDate} onChange={(e) => handleWorkChange(e, index)}/>
                                </div>
                                <div>
                                    <label for="end">End date</label>
                                    <input type="text" name="endDate" id="endDate"  placeholder='MM/YY' value={singleWork.endDate} onChange={(e) => handleWorkChange(e, index)}/>
                                </div>
                                
                            </div>
                            {workList.length > 1 && (<hr/>)}

                            {workList.length - 1 === index && workList.length < 5 
                                && (
                                <button type='button' className='buttons add-btn' onClick={handleWorkAdd}>
                                    <span>Add a job</span>
                                </button>)}
                                
                                


                                    

                            
                        </div>
                        
                        
                        )}

                    </div>


                </form>
                
                

                
            </div>

           
            

        </div>
        
        
    )

}

export default WorkData



