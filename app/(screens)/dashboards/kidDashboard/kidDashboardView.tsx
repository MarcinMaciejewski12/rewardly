import { HeaderContainer, MyTaskskContainer, MyTaskskText, UserName, UserStar } from "./KidDashboardViewStyle";
import { KanbanLink } from "@/app/components/kanbanLinks/KanbanLink";
import { View, Text } from "react-native";
import { theme } from "@/app/theme/theme";
import { DefaultBoyIcon } from "@/assets/svg/defaultBoyIcon";
import { TaskBoardIcon } from "@/assets/svg/taskBoard";
import { InProgressIcon } from "@/assets/svg/inProgress";
import { DoneIcon } from "@/assets/svg/done";



const user = {
    name: "John",
    sureName: "Doe",
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
                    <UserName>{("motivationalTable")} {name}</UserName>
                    <UserStar>{("general.availableStars")}: {stars}</UserStar>
                </View>
            </HeaderContainer>
            <MyTaskskContainer>
                <MyTaskskText>{("general.myTasks")}</MyTaskskText>
            </MyTaskskContainer>
            <KanbanLink defaultColor={theme.dashboardLinks.brightPink} svg={<TaskBoardIcon />} text={("general.todo")} />
            <KanbanLink defaultColor={theme.dashboardLinks.brightYellow} svg={<InProgressIcon />} text={("general.inProgress")} />
            <KanbanLink defaultColor={theme.colors.quaternary} svg={<DoneIcon />} text={("general.done")} />
        </>
    );
}