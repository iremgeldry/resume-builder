import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function PersonalData({imageChange, setPersonalInfo, personalInfo}){

    const [open, setOpen] = useState(false);
    const handleOpen = (open) => {
        setOpen((open) => !open);
    }

    const handlePersonChange = (e, index) => {
        e.preventDefault();
        const {name, value} = e.target;
        const list = [...personalInfo];
        list[index][name] = value;
        setPersonalInfo(list);
      }

    

    
    return(
        <div className="menu">
            <div className="ddBtn">
                <div className='ddTitle'>
                    <i class="bi bi-person-fill"></i>
                    <p className='titles'>Personal Information</p>
                </div>
                <i className='arrow' onClick={handleOpen}>{open ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i> }</i>
            </div>

            <div className={`content-closed ${open ? "content-open" : null}`} >
                <form className='person-content'>
                   <div className='form-field'>
                       {personalInfo.map((person, index) => 
                       <div key={index} className='person-form'>
                           <div className='inputBox'>
                                <label for="profile-picture">Profile Picture</label>
                                <input type="file" id="profile-picture" accept='image/*' onChange={imageChange}/>
                            </div >

                            <div className='inputBox'>
                                    <label for="name">Full Name</label>
                                    <input type="text" name="name" id="name" placeholder="Enter your full name" value={person.name} onChange={(e)=>handlePersonChange(e,index)}/>
                            </div>


                            <div className='inputBox'>
                                <label for="mail">E-Mail</label>
                                <input type="text" name="mail" id="mail" placeholder="Enter your e-mail" value={person.mail} onChange={(e)=>handlePersonChange(e,index)}/>
                            </div>

                            <div className='inputBox'>
                                <label for="phone">Contact Number</label>
                                <input type="text" name="phone" id="phone" placeholder="Enter your contact number" value={person.phone} onChange={(e)=>handlePersonChange(e,index)}/>
                            </div>
                                
                            <div className='inputBox'>
                                <label for="address">Adress</label>
                                <input type="text" name="address" id="address" placeholder="Enter your city" value={person.address} onChange={(e)=>handlePersonChange(e,index)}/>
                            </div>

                       </div>
                       
                       
                       )}
                        

                            
                   </div>
                                      
                </form>
            </div>

           
            

        </div>
        
        
    )

}

export default PersonalData

