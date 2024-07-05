import { useState } from 'react'
import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { LuPenSquare } from "react-icons/lu";
import { FaPencilRuler } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import 'bootstrap-icons/font/bootstrap-icons.css';





function Skills({skillList, setSkillList}){

    

    const [open, setOpen] = useState(false);
    const handleOpen = (open) => {
        setOpen((open) => !open);
    }
    

    const handleSkillAdd = () => {
        setSkillList([...skillList, { skill: ""}]);
      }
    
    const handleSkillRemove = (index) => {
        const list = [...skillList];
        list.splice(index, 1);
        setSkillList(list);
    
      }
    
    const handleSkillChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...skillList];
        list[index][name] = value;
        setSkillList(list);
    
      }



  return (
      <div className="menu">

        <div className="ddBtn">
                <div className='ddTitle'>
                    <i className='menu-icon'><FaPencilRuler /></i>
                    <p className='titles'>Skills</p>
                </div>
                <i className='arrow' onClick={handleOpen}>{open ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i> }</i>
            </div>
        <div className={`content-closed ${open ? "content-open" : null}`}>
            <p>Add up to 10 skills</p>
            <form className='skill'>
                <div className='form-field'>
                {skillList.map((singleSkill, index) =>
                    <div key={index} className='skills-form'>
                        <div className='skill-input'>
                            <input className="input-skill" name="skill" type="text" id="skill" placeholder='JavaScript' value={singleSkill.skill} onChange={(e) => handleSkillChange(e, index)} required />
                            {skillList.length > 1 && 
                            (<button type='button' className='remove-btn' onClick={()=>handleSkillRemove(index)}>
                                <svg className='remove-icon'><AiOutlineDelete /></svg>
                            
                            </button>)}
                        </div>

                        {skillList.length - 1 === index && skillList.length < 10 
                        && (<button type='button' className='add-btn buttons' onClick={handleSkillAdd}>
                                <span>Add skill</span>
                            </button>)}

                    </div>
                                
                    )} 
                </div>
            </form>
            

            
            
            
            
        </div>


      </div>
    
  )
}

export default Skills

