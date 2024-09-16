'use client'

import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"
import { Grid, Text } from "@mantine/core"

export default function HeaderEditProfile() {
    return (
        <LayoutNavbarHome>
            <Grid justify="center" align="center">
                <Grid.Col span="auto">
                <LayoutIconBack/>
                </Grid.Col>
                <Grid.Col span= {6}>
                    <Text ta={"center"} fw={"bold"} c={"white"}>EDIT PROFILE</Text>
                </Grid.Col>
                <Grid.Col span="auto"></Grid.Col>

            </Grid>
        </LayoutNavbarHome>
    )
}