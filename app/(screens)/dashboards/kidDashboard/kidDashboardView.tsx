import { DefaultBoyIcon } from "@/assets/svg/defaultBoyIcon";
import { HeaderContainer, UserName, UserStar } from "./kidDashboardViewStyle";
import KanbanLink from "@/app/components/kanbanLinks/KanbanLink";
import { View } from "react-native";


const user = {
    name: "John Doe",
    stars: 404,
    photo: "https://example"
};

export default function KidDashboardView() {
    const { name, stars } = user;
    return (
        <>
            <HeaderContainer>
                <DefaultBoyIcon />
                <View>
                    <UserName>{name}</UserName>
                    <UserStar>Zebrane gwiazdki: {stars}</UserStar>
                </View>
            </HeaderContainer>
            <View>
            </View>
            <KanbanLink defaultColor="red" svg={null} text="siemano kolano" />
        </>
    );
}