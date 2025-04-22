import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import data from '../book_order.json';


type ItemProps = {title: string};


const Item = ({title}: ItemProps) => (
    <View  style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const App = () => (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.DATA}
                renderItem={({item}) => <Item title={item.title} />}
               ></FlatList>
        </SafeAreaView>
    </SafeAreaProvider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#55514b',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 20,
    },
});

export default App;