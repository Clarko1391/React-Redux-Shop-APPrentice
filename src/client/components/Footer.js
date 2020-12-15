import React from 'react'
import styled from 'styled-components'

// CSS 

const FooterContainer = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Copyright = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 1vh;
    color: #fcfbfc;
`

function Footer() {
    return (
        <FooterContainer>
            <Copyright>Clark Oake © 2020</Copyright>
        </FooterContainer>
    )
}

export default Footer
