import React from "react"
import styled from "styled-components"

const StyledDetailsContainer = styled.div`
    font-family: "Grotesk TXPro", sans-serif;
    font-size: 1.2vw;
    margin-top: -20px;
    position: absolute;
    top: 95%;
    left: 0;
    width: 40vw;
    color: #fff;
    opacity: 0;
    
    .title {
        font-size: 1.5vw;
        margin-bottom: 5px;;
    }
    
    .desc {
        padding-left: 20vw;
        text-indent: -20vw;
    }
`

export const DetailsText = ({ details }) => (
  <StyledDetailsContainer className="details">
    <div className="title">{details.title}</div>
    <div className="desc">{details.desc}</div>
  </StyledDetailsContainer>
)
