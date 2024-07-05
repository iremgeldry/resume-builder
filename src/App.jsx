import { useState } from 'react'
import { React, useEffect, useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
//import './App.css'
import '/css/main.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AiFillAliwangwang } from "react-icons/ai";
import Resume from './component/Resume.jsx';
import PersonalData from './component/PersonalData.jsx';
import Education from './component/Education.jsx';
import ProfSum from './component/ProfSum.jsx';
import Skills from './component/Skills.jsx';
import profilePic from './assets/profilepic.jpg'
import WorkData from './component/WorkData.jsx';
//import Buttons from './component/Buttons.jsx';

//bootstrap customization
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // Save as PDF //
  const [loader, setLoader] = useState(false);
  const pdfRef = useRef();
  const downloadPDF = () => {
    const capture = pdfRef.current;
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth-imgWidth*ratio)/2;
      const imgY =30;
      doc.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
      doc.save('cv.pdf');
    })
  }
  

  const [image, setImage] = useState()
  const handleImage = (e) =>
  {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  const [personalInfo, setPersonalInfo] = useState([
    {
      name: "",
      mail: "",
      phone: "",
      address: "",
    }
  ])

  const [profsum, setProfsum] = useState("");
  const [skillList, setSkillList] = useState([{ skill: ""},]);
  const [workList, setWorkList] = useState([
    {
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description:[],
    },
  ]
   
  )

  const [education, setEducation] = useState([
    {
    school:"",
    location:"",
    degree:"",
    startDate: "",
    endDate: "",
    }]
  )

  const handleReset = () => {
  setImage();
  setPersonalInfo([""]);
  setProfsum("");
  setSkillList([""]);
  setWorkList(["No work history."]);
  setEducation(["No work history."]);
  document.querySelectorAll('input').forEach(target => target.value = '');
  
  }


  // load page with example resume
  useEffect(() => {loadSample();}, []);

  const loadSample = () => {
    handleReset();
    setImage(profilePic);
    setPersonalInfo([
    {
      name: "Elif Irem Geldry",
      mail: "hello@gmail.com",
      phone: "+490000000000",
      address: "Germany",
    }
  ]);

  setProfsum("I am Irem, a passionate and enthusiastic Web Developer and a former Architect with an eye for aesthetics! As a creative and analytical person, I am highly motivated to work in a career that matches my characteristic skills.");
  setSkillList([
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "JavaScript"},
    {skill: "React.js"},
    {skill: "Bootstrap"},
    {skill: "Sass"},
    {skill: "Adobe Photoshop & Illustrator"},
    {skill: "Affinity"},
    {skill: "Critical Thinking"},
    {skill: "Problem Solving"},
  ]);
  setWorkList([{
    company: "Architecture and City Planning Office",
    role: "Architect",
    description: "designer",
    startDate: "2020",
    endDate: "2023",
  }]);
  setEducation([
    {
    school:"Istanbul Technical University",
    location:"Istanbul/Turkey",
    degree:"Bachelor of Architecture",
    startDate: "09/2014",
    endDate: "06/2019",
    },
    {
      school:"Free Internet Sources",
      location:"home-schooling",
      degree:"Jr. Web Developer",
      startDate: "01/2024",
      endDate: "today",
      },
  ]);
  }

  return (
    <>
      <div className="container hersey">
        <div className="row align-items-start mt-5">
          <div className='col-xl-4'>
            <div className='col'>
              <PersonalData image={image} imageChange={handleImage} personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
              <ProfSum setProfsum={setProfsum}/>
              <Skills skillList={skillList} setSkillList={setSkillList}/>
              <WorkData workList={workList} setWorkList={setWorkList}/>
              <Education education={education} setEducation={setEducation} />
            </div>
            <div className='col'>
              

              <div className='button1-2'>
                  <button className='button1 buttons' onClick={loadSample}>Load Example</button>
                  <button className='button2 buttons' type="reset" onClick={handleReset}>Clear Resume</button>
              </div>
              <button className='button3 buttons' onClick={downloadPDF} disabled={!(loader===false)}>
                {loader?
                (<span>Downloading</span>)
                :(<span>Save as PDF</span>)}
              </button>
            </div>
            
          </div>

          <div className='col-xl-8'>
            <Resume pdfRef={pdfRef} image={image} personalInfo={personalInfo} profsum={profsum} skillList={skillList} workList={workList} education={education}/>
          </div>

        </div>
        
        
      </div>
      
    </>
  )
}

export default App

/*

        <Buttons handleReset={handleReset} loadSample={loadSample}/>
        
      const downloadPDF = () => {
    const capture = document.querySelector('.cv');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4', true);
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('cv.pdf');

    })
  }



//another way
  
  const downloadPDF = () => {
    const capture = document.querySelector('.cv');
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth-imgWidth*ratio)/2;
      const imgY =30;
      doc.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
      setLoader(false);
      doc.save('cv.pdf');
    })
  }

                

 */