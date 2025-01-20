
import { View, Text, StyleSheet } from "react-native";

import styled, { ThemeProvider } from "styled-components/native";
import KidDashboardView from "./(screens)/dashboards/kidDashboard/KidDashboardView";
import { theme } from "./theme/theme";

export default function HomeScreen() {
  return (
    <ThemeProvider theme={theme}>
      <IndexBackground>
        <KidDashboardView />
        {/* <Text>asd</Text>  
      <StatusBar style="auto" />
      <Link href={"/profile"} style={{color:'blue'}}>Go to profile</Link> */}
      </IndexBackground>
    </ThemeProvider>
  );
}


const IndexBackground = styled.View`
background-color: ${({ theme }) => theme.colors.primary};
height: 100%;
width: 100%;
`