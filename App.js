import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import FlatCards from "./src/FlatCards.jsx";
import ElevatedCards from "./src/ElevatedCards.jsx";
import TrendingPages from "./src/TrendingPages.jsx";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <TrendingPages />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
