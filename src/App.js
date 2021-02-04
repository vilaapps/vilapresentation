import React, { useState } from 'react'

import DraggableWebcam from './components/DraggableWebcam';
import PdfViewer from './components/PdfViewer';
import Dropzone from './components/Dropzone';

const App = () => {
  const [pdfBase64, setPdfBase64] = useState(null)

  const handlePdf = (event) => {
    const [selectedFile] = event

    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = ({ target: { result } }) => setPdfBase64(result)
      fileReader.readAsDataURL(selectedFile);
    }
  }

  const renderComponent = () => !pdfBase64
    ? <Dropzone handlePdf={handlePdf} />
    : <>
      <PdfViewer pdfBase64={pdfBase64} />
      <DraggableWebcam />
    </>

  return <div className="App">
    {renderComponent()}
  </div>
}

export default App;
