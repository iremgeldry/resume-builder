import jsPDF from 'jspdf';
import React from 'react'
import { useState } from 'react'

function Buttons({handleReset, loadSample}) {

  const [loader, setLoader] = useState(false);
  const downloadPDF = () => {
    const capture = document.querySelector('.cv');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      componentHeight = doc.internal.pageSoze.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('cv.pdf');

    })
  }

  
  return (
    <div>
        <div className='button1-2'>
            <button className='button1 buttons' onClick={loadSample}>Load Example</button>
            <button className='button2 buttons' type="reset" onClick={handleReset}>Clear Resume</button>
        </div>
        <button className='button3 buttons' onClick={downloadPDF} disabled={!(loader===false)}>
          {loader?
          (<span>Downloading</span>)
          :(<span>Download</span>)}
        </button>
        
    </div>
  )
}

export default Buttons