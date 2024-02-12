import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const ItemBox = () => {
  return (
    <>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="arrow-down-outline" size={20} color={Colors.medium} />
          <Text style={{ flex: 1 }}>Sort</Text>
          <Ionicons name="chevron-forward" size={22} color={Colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="fast-food-outline" size={20} color={Colors.medium} />
          <Text style={{ flex: 1 }}>Hygiene rating</Text>
          <Ionicons name="chevron-forward" size={22} color={Colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="pricetag-outline" size={20} color={Colors.medium} />
          <Text style={{ flex: 1 }}>Offers</Text>
          <Ionicons name="chevron-forward" size={22} color={Colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="nutrition-outline" size={20} color={Colors.medium} />
          <Text style={{ flex: 1 }}>Dietary</Text>
          <Ionicons name="chevron-forward" size={22} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Categories</Text>
    </>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
  },
});
