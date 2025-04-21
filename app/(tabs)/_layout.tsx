import { ImageBackground, Image, Text, View } from "react-native";
import React from 'react'
import {Tabs} from "expo-router";
import {icons} from "@/constants/icons";

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <ImageBackground

                            />
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false
                }}
            />
            <Tabs.Screen
            name="search"
            options={{
                title: 'Search',
                headerShown: false
            }}
        />
        </Tabs>

    )
}
export default _Layout
