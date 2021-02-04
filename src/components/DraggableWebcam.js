import React from 'react'

import Draggable from 'react-draggable';
import Webcam from "react-webcam";
import styled from 'styled-components';

const { innerWidth: width, innerHeight: height } = window

const DraggableWebcam = () => {

    return <div style={{ position: 'absolute', width, height, }}>
        <Draggable bounds="parent">
            <WebcamShadow>
                <WebcamStyled mirrored />
            </WebcamShadow>
        </Draggable>
    </div>
}

const WebcamStyled = styled(Webcam)`
  width: 240px;
  height: 180px;
  border-radius: 10px;
`

const WebcamShadow = styled.div`
  -webkit-box-shadow: 24px 21px 31px -16px rgba(0,0,0,0.75);
  -moz-box-shadow: 24px 21px 31px -16px rgba(0,0,0,0.75);
  box-shadow: 24px 21px 31px -16px rgba(0,0,0,0.75);
  width: 240px;
  height: 180px;
  border-radius: 10px;
`

export default DraggableWebcam