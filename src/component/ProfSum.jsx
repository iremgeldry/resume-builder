import { useState } from 'react'
import React from 'react'
import { FaPenToSquare } from "react-icons/fa6";



function ProfSum({toggle, setProfsum}){

    const [open, setOpen] = useState(false);
    const handleOpen = (open) => {
        setOpen((open) => !open);
    }

  return (
      <div className="menu">
        <div className="ddBtn ">
                <div className='ddTitle'>
                <i className='menu-icon'><FaPenToSquare /></i>
                    <p className='titles'>Professional Summary</p>
                </div>
                <i className='arrow' onClick={handleOpen}>{open ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i> }</i>
        </div>
        <div className={`content-closed ${open ? "content-open" : null}`}>
            <textarea name="profsum" id="profsum" cols="30" rows="10" placeholder='I am a...' onChange={(event)=>setProfsum(event.target.value)}></textarea>
            <p>Shortly describe yourself</p>
        </div>

      </div>
    
  )
}

export default ProfSum