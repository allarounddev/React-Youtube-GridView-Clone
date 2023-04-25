import { View, StyleSheet } from "react-native";
import React from "react";
import Dashboard from "../components/Dashboard";
const Home = () => {
  return (
    <View style={[styles.HOME, { backgroundColor: "white" }]}>
      {/* <Navbar/> */}
      <View style={styles.Home_container}>
        <View style={styles.Home_container_Dashboard}>
          <Dashboard />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HOME: {
    flex: 1,
    width: "100%",
    height: "100vh",
  },
  Home_container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  Home_container_sidebar: {
    width: 320,
    height: "100%",
  },
  Home_container_Dashboard: {
    width: "100%",
    flex: 1,
    height: "100%",
  },
});
export default Home;
