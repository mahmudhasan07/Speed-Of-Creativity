import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../../1.pdf'


function PDFcamp() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={pdf}  onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber}  renderTextLayer={false} renderAnnotationLayer={false}/>
      </Document>
      
    </div>
  );
}

export default PDFcamp