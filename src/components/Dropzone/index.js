import React, { useCallback } from 'react'

import styled from 'styled-components'
import DropzoneText from './DropzoneText'

import { useDropzone } from 'react-dropzone'

const Dropzone = ({ handlePdf }) => {
    const onDrop = useCallback(handlePdf, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const selectText = () => isDragActive
        ? "SOLTE O ARQUIVO..."
        : "ARRASTE O ARQUIVO PARA DENTRO DA DROPZONE OU CLIQUE AQUI PARA ABRIR A SELEÇÃO"

    return (
        <Wrapper>
            <InputWrapper {...getRootProps()}>
                <input {...getInputProps()} />
                <DropzoneText text={selectText()} />
            </InputWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    border: 5px solid #35a972;
    border-style: dashed;
    width: 90vw;
    height: 90vh;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    background-color: rgba(53,169,114, 0.5);
`

const InputWrapper = styled.div`
    width: 100%;
    height: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center;
`

export default Dropzone