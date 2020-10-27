import React from 'react'
import styled from 'styled-components'
import img from '../../assets/img/left.png'
import BackButton from '../pageComponents/BackButton'

// CSS
const ReferenceContainer = styled.div`
    height: 80vh;
    width: 100%;
    background: url(${img}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Title = styled.h1`
    font-size: 3vh;
    color: #fcfbfc;
`
const Desc = styled.p`
    box-sizing: border-box;
    width: 80%;
    padding: 10px;
    font-size: 2vh;
    color: #fcfbfc;
    background-color: rgba(78,77,78, 0.6);
    border-radius: 4px;
`

function UserAdd() {
    return (
        <>
            <ReferenceContainer >
                <Title >
                    Add your own reference chart!
                </Title>
                <Desc >
                    With so many different references and charts floating around its difficut to narrow down which ones are worth saving for later.
                    Now you don't need to worry about losing valuable information anymore!
                </Desc>
                <Desc >
                    Simply create an account then upload the data you want to hang on to and ShopAPPrentice handles the rest!
                </Desc>
                <Desc >
                    This feature is currently under construction and will be added in a future update along with other functionality
                </Desc>
            </ReferenceContainer>
            <BackButton />
        </>
    )
}

export default UserAdd
