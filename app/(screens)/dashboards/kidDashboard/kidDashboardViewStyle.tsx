import { GlobalTheme } from "@/app/theme/theme";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    background-color: ${({ theme }: GlobalTheme) => theme.colors.quaternary};
    width: 100%;
    height: 200px;
    border-radius: 0 0 30px 30px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: ${({ theme }: GlobalTheme) => theme.gaps.defaultGap};
    `

export const MyTaskskContainer = styled.View`
    padding: ${({ theme }: GlobalTheme) => theme.paddings.default};
`

export const MyTaskskText = styled.Text`
    font-size: ${({ theme }: GlobalTheme) => theme.fontsSizes.large};
    font-weight: bold;

`

export const UserName = styled.Text`
    font-size: ${({ theme }: GlobalTheme) => theme.fontsSizes.large};
    font-weight: medium;
    `
export const UserStar = styled.Text`
    font-size: ${({ theme }: GlobalTheme) => theme.fontsSizes.medium}
    `

export const TaskText = styled.Text`
    font-size: ${({ theme }: GlobalTheme) => theme.fontsSizes.large}
`
