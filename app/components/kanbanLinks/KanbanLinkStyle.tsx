import styled from "styled-components/native";

export const KanbanLinkContainer = styled.View<{ $bgColor: string }>`
    background-color: ${(props: { $bgColor: string }) => props.$bgColor};
    height: 100px;
    width: 100px;
    border-radius: 100%;
    margin: 10px;    
    justify-content: center;
    align-items: center;
    position: relative;
`
export const KanbanLinkText = styled.Text`
    font-size: 25px;
`