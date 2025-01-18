import { View, Text } from "react-native";
import { KanbanLinkContainer } from "./KanbanLinkStyle";
import { ReactElement } from "react";

interface KanbanLinkProps {
    defaultColor: string
    svg: ReactElement | null
    text: string
}

export default function KanbanLink({
    defaultColor,
    svg,
    text
}: KanbanLinkProps) {
    return (
        <KanbanLinkContainer $bgColor={defaultColor}>
            {svg}
            <Text>{text}</Text>
        </KanbanLinkContainer>
    )
}