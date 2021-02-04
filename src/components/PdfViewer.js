import React, { useState } from 'react'

import KeyboardEventHandler from 'react-keyboard-event-handler';
import styled from 'styled-components';

import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/esm/entry.webpack';

const { innerWidth: width, innerHeight: height } = window

const PdfViewer = ({ pdfBase64 }) => {

    const listenersKeys = ['left', 'right']

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const handleNumPages = ({ numPages }) => setNumPages(numPages)
    const backPage = () => pageNumber > 1 && setPageNumber(pageNumber - 1)
    const nextPage = () => pageNumber < numPages && setPageNumber(pageNumber + 1)
    const handleKey = (key) => key === "left" ? backPage() : nextPage()

    return <Wrapper>
        <Document
            file={pdfBase64}
            onLoadSuccess={handleNumPages}
        >
            <Page
                pageNumber={pageNumber}
                width={width}
                height={height}
            />
        </Document>

        <KeyboardEventHandler
            handleKeys={listenersKeys}
            onKeyEvent={handleKey}
        />
    </Wrapper>
}

const Wrapper = styled.div`
  width: ${width};
  height: ${height};
  position: absolute;
`

export default PdfViewer