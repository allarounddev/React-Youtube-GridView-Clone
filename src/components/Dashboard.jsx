import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Card";
const Dashboard = () => {
  console.log(window.env.apikey);
  const [Data, setData] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const getDataYoutube = async () => {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=programming&key=${window.env.apikey}`;
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      console.log(response);
      setNextPage(response.data.nextPageToken);
      setData(response.data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const LoadNextItems = async () => {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=programming&key=${window.env.apikey}&pageToken=${nextPage}`;

    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setNextPage(response.data.nextPageToken);
      // setData(...Data, ...response.data.items)
      let allData = Data.concat(response.data.items);
      setData(allData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDataYoutube();
  }, []);
  return (
    <View style={styles.Dashboard}>
      {/* <View style={styles.Dashboard_FlatListView}><Text>hello flatList</Text></View> */}
      {Data.length === 0 && isLoading ? (
        <View style={styles.Dashboard_ScrollView}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView
          onScroll={LoadNextItems}
          scrollEventThrottle={400}
          style={styles.Dashboard_ScrollView}
        >
          <View style={styles.Dashboard_ScrollView_inner}>
            {Data.map((item, index) => {
              return <Cards item={item} index={index} />;
            })}
          </View>
          {/* Render loading indicator */}
          {isLoading && (
            <View>
              <ActivityIndicator size="large" />
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Dashboard: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  Dashboard_FlatListView: {
    width: "100%",
    height: 58,
    backgroundColor: "red",
  },
  Dashboard_ScrollView: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  Dashboard_ScrollView_inner: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
export default Dashboard;
