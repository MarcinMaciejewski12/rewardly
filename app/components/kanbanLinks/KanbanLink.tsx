import { View } from "react-native";
import { KanbanLinkContainer, KanbanLinkText } from "./KanbanLinkStyle";
import { ReactElement } from "react";

interface KanbanLinkProps {
    defaultColor: string
    svg: ReactElement | null
    text: string
}

export function KanbanLink({
    defaultColor,
    svg,
    text
}: KanbanLinkProps) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
            <KanbanLinkContainer $bgColor={defaultColor}>
                {svg}
            </KanbanLinkContainer>
            <KanbanLinkText>{text}</KanbanLinkText>
        </View>
    )
}