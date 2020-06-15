import React from "react"
import styled from "styled-components";

const Content = styled.div`
    margin-top: 5rem;
    background-color: skyblue;
`;

const MainComment = styled.div`
    display: flex;
    justify-content: center;
    background-color: pink;
`;



export default () => {
    return(
        <Content>
            <MainComment>
                n 개의 브랜드를 ooo 팝업스토어 매장에서 마주하세요!
            </MainComment>
        </Content>
    )
}