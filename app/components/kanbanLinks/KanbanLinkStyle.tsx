import { GlobalTheme } from "@/app/theme/theme";
import styled from "styled-components/native";

export const KanbanLinkContainer = styled.View<{ $bgColor: string }>`
    background-color: ${(props: { $bgColor: string }) => props.$bgColor};
    height: 70px;
    width: 70px;
    border-radius: 100%;
    margin: 10px;    
    justify-content: center;
    align-items: center;
    position: relative;
`
export const KanbanLinkText = styled.Text`
    font-size: ${({ theme }: GlobalTheme) => theme.fontsSizes.large};
    font-family: "McLaren"
`