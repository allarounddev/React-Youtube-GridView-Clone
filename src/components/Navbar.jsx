import { View, Text, StyleSheet, Image, } from 'react-native';
import { TextInput } from 'react-native-web';
import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import youtube from "../assets/youtubelogo.png";
const Navbar = () => {
    return (
        <View style={styles.Navbar}>
            <View style={styles.Navbar_ineer}>
                <View style={styles.Navbar_ineer_firstView}>
                    <View style={styles.Navbar_ineer_firstView_item}>
                        {/* <Icon name="home-outline" color="#5FACE9" size={30} /> */}
                        <View><Text>icon1</Text></View>
                        <Image source={youtube} style={styles.youtubelogo} />
                    </View>
                </View>
                <View style={styles.Navbar_ineer_secondView}>
                    <View style={styles.Navbar_ineer_secondView_item}>
                        <TextInput />
                        <View>
                            {/* <Icon name="home-outline" color="#5FACE9" size={30} /> */}
                            <View><Text>icon2</Text></View>
                        </View>
                    </View>
                </View>
                <View style={styles.Navbar_ineer_thirdView}>
                    <View style={styles.Navbar_ineer_thirdView_item}>
                        <Text>last3</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    Navbar: {
        width: "100%",
        height: 56,
        paddingLeft: 16,
        paddingRight: 16,

    },
    Navbar_ineer: {
        height: 56,
        width: "100%",
        // backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    youtubelogo: {
        width: 150,
        height: 56,
        // width: "100%",
        // backgroundColor: "black",
    },
    Navbar_ineer_firstView: {
    // flex:1,
    },
    Navbar_ineer_firstView_item: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"

    },
    Navbar_ineer_secondView: {
    // flex:1,
    },
    Navbar_ineer_secondView_item: {

    },
    Navbar_ineer_thirdView: {
    // flex:1
    },
    Navbar_ineer_thirdView_item: {

    }
})

export default Navbar