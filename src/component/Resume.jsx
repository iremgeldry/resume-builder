import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useRef } from 'react'


function Resume({pdfRef,image, personalInfo, profsum, skillList, workList, education}){

   
    return(
            <div className='cv' ref={pdfRef}>
                {personalInfo[0] !== "" &&
                (<section>
                    <div className='header container-lg' >
                        <div className='row d-flex justify-content-between my-3'>
                            <div className="col-3 d-flex align-items-center justify-content-start p-0">
                                <img  className="d-none d-md-block" id='profile-pic' src={image}/>
                            </div>
                            
                            <div className="col-md-9 p-0  align-items-center justify-content-center">
                                {personalInfo.map((person, index) => 
                                <div key={index} className='col h-100 align-content-end'>
                                    <h1 className='col-12 fw-bold m-0 text-center'>{person.name}</h1>
                                    <div className='row col-12 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-3 mt-5'>
                                        <div className='contact-list col mb-sm-1 mb-md-1 mb-lg-0'>
                                            <i class="bi bi-envelope-fill resume-icon"></i>
                                            <p className='m-0'>{person.mail}</p>
                                        </div>
                                        <div className='contact-list col mb-sm-1 mb-md-1 mb-lg-0'>
                                            <i className='resume-icon'><FaPhone /></i>
                                            <p  className='m-0'>{person.phone}</p>
                                        </div>
                                        <div className='contact-list col mb-sm-1 mb-md-1 mb-lg-0'>
                                            <i className='resume-icon'><FaLocationDot /></i>
                                            <p  className='m-0'>{person.address}</p>
                                        </div>

                                    </div>
                                </div>
                            )}
                            </div>
                             
                        </div>
                        
                    </div>

                </section>)}
                
                
                
                <div className='prof-summary'>
                    
                    {profsum !== "" &&
                        (<div>
                            <h1 className='cv-title'>PROFESSIONAL SUMMARY</h1>
                            <p className='my-2 ps-2'>{profsum}</p>
                        </div>
                        )
                    }



                </div>
                          
                <div >
                    <h1 className='cv-title' >SKILLS</h1>
                    <div className='cv-skill my-2 ps-2'>
                        {skillList[0] === "" && (<p className='mb-0'>No skills listed.</p>)}
                        {skillList.map((singleSkill, index) => 
                            <ul key={index}>
                            {singleSkill.skill && <li>{singleSkill.skill}</li>}
                            </ul>)
                        }
                        
                    </div>
                </div>

                <div className='work-history'>
                    <h1 className='cv-title'>WORK HISTORY</h1>
                    <div className='my-2'>
                        {/* {workList[0][0].length === 0  && (<li>No work history.</li>)} */}
                        {workList.map((singleWork, index) =>
                                <div key={index}>
                                    <div className='part1 ps-2'>
                                        <h2>{singleWork.company}</h2>
                                        <p className='cv-date'>{singleWork.startDate} - {singleWork.endDate}</p>
                                    </div>
                                    
                                    <h2 className='part2 ps-2'>{singleWork.role}</h2>
                                    <ul className='mb-3'>
                                        {singleWork.description && <li>{singleWork.description}</li>}
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>


                

                <div className='education-section'>
                    
                    <h1 className='cv-title'>EDUCATION</h1>
                    <div className='my-2 ps-2'>
                        {education.length === "" && (<li>No education history.</li>) }
                    {education.length !== 0 && education[0] !== "" ? 
                        (education.map((singleEducation, index) =>
                            <div key={index}>
                                <div className='part1'>
                                    <h2>{singleEducation.school} | {singleEducation.location}</h2>
                                    <p className='cv-date'>{singleEducation.startDate} - {singleEducation.endDate}</p>
                                </div>
                                <h2 className='part2 mb-3'>{singleEducation.degree}</h2>
                            </div>
                        )) : (<li>No work history.</li>)
                    }
                </div>
                </div>
            </div>
    )

}

export default Resume

/*

{skillList.length !== 0 && skillList[0] !== "" ? 
                        (skillList.map((singleSkill, index) => 
                            <ul key={index}>
                            {singleSkill.skill && <li>{singleSkill.skill}</li>}
                            </ul>
                        )) : (
                            <p>No skills listed.</p>
                          )
                        }
*/