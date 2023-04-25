import React, { useState } from "react";
import {View,Text,StyleSheet,Image,Pressable} from "react-native";
import moment from "moment";
import { Hoverable} from "react-native-web-hooks";

const Cards = ({ item}) => {
    const [isHover, setHover] = useState(false);

    return (
        <View style={!isHover ? [styles.card] : [styles.card_hove]}>
            <Hoverable
                onHoverIn={() => {
                    setHover(true);
                }}
                onHoverOut={() => setHover(false)}
            >
                <View>
                    <View style={styles.card_ImageView}>
                        <Image
                            style={styles.card_ImageView_image}

                            source={{
                                uri: item.snippet.thumbnails.default.url
                            }}
                        />
                    </View>
                    <View style={styles.CardContent} >
                        <View style={styles.CardContent_row}>
                            <View
                                style={styles.CardContent_row_img}
                            >
                                <View style={styles.CardContent_row_img_ViewImg}>
                                    <Image
                                        source={{ uri: item.snippet.thumbnails.default.url }}
                                        style={styles.CardContent_row_img_ViewImg_img}
                                    />
                                </View>
                                <View style={styles.CardContent_row_img_Content}>
                                    <Text
                                        numberOfLines={2}
                                        ellipsizeMode="tail"
                                        style={styles.nameStyle}
                                    >
                                        {item.snippet.title}
                                    </Text>
                                    {/* {!isHover && ( */}
                                        <>
                                            <Text style={styles.Card_ChanalName} numberOfLines={2} ellipsizeMode="tail">
                                                {item.snippet.channelTitle}
                                            </Text>
                                            <View>
                                                <Text style={styles.TextStyle}>{moment(item.snippet.publishTime).fromNow()}</Text>
                                            </View>
                                        </>
                                    {/* )} */}
                                </View>

                            </View>

                            {/* <Pressable
                                onPress={select_index === index ? hideMenu : handleMenu}
                                style={[styles.menuBox]}
                            >
                                {isHover ? (
                                    <Image source={dots} style={{ width: 20, height: 20 }} />
                                ) : null}
                            </Pressable> */}
                        </View>

                        <View style={styles.marginHorizonal5}>
                            {isHover && (
                                <View>
                                    <Pressable style={styles.btnStyle}>
                                        <Text style={styles.btnText}>WATCH LATER</Text>
                                    </Pressable>
                                    <Pressable style={styles.btnStyle}>
                                        <Text style={styles.btnText}>ADD TO QUEUE</Text>
                                    </Pressable>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </Hoverable>
        </View>
    );
};
export default Cards;

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 320,
        margin: 10,
        backgroundColor: "#FFFFFF",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
        shadowColor: "#000000",
        shadowOpacity: 1,
        shadowRadius: { height: 20, width: 20 },
        elevation: 2,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    card_hove: {
        width: 300,
        height: 320,
        margin: 10,
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
        transform: [{ scale: 1.3 }],
        zIndex: 100,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: { height: 2, width: 2 },
        elevation: 2,
        borderRadius: 10,
    },
    card_ImageView: {

    },
    card_ImageView_image: {
        width: 300,
        height: 150,
        borderRadius: 10,
    },

    CardContent: {
        flex: 1,
        height: "100%",
        width: "100%",
        marginTop: 10,
        marginBottom: 10
    },
    CardContent_row: {
        flex: 1,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    CardContent_row_img: {
        flex: 1,
        height: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    CardContent_row_img_ViewImg: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
        width: 40,
    },
    CardContent_row_img_ViewImg_img: {
        borderRadius: 20,
        width: 30,
        height: 30
    },
    CardContent_row_img_Content: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    Card_ChanalName: {
        marginTop: 10,
        marginBottom: 10,
        color: "#999999"
    },
    nameStyle: {

        fontSize: 14,
        fontWeight: "600",

    },
    TextStyle: {
        fontSize: 14,
        fontWeight: "500",
        color: "#999999"

    },
    marginHorizonal5: {
        marginHorizontal: 25,
        marginTop: 10
    },
    btnStyle: {
        padding: 7,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F2F2"
    },
    btnText: {
        textAlign: "center",
        fontSize: 10,
        fontWeight: "500",
        color: "#676767"
    },
});
