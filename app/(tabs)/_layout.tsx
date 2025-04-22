import { ImageBackground, Image, Text, View } from "react-native";
import React from 'react'
import {Tabs} from "expo-router";
import {icons} from "@/constants/icons";
import {images} from "@/constants/images";

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
                            <ImageBackground>
                                <Image source={icons.home} tintColor='#151312' className="size-5" />
                            </ImageBackground>
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <ImageBackground>
                                <Image source={icons.save} tintColor='#151312' className="size-5" />
                            </ImageBackground>
                        </>
                    )
                }}
            />
            <Tabs.Screen
            name="search"
            options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <>
                        <ImageBackground>
                            <Image source={icons.search} tintColor='#151312' className="size-5" />
                        </ImageBackground>
                    </>
                )
            }}
        />
        </Tabs>

    )
}
export default _Layout
