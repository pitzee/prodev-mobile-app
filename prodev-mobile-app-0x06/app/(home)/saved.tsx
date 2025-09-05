import PropertyListing from "@/components/common/PropertyListing";
import { SAMPLE_DATA } from "@/constants/data";
import { PropertyListingProps } from "@/interfaces";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Saved = () => {
  const [savedProperties, setSavedProperties] = useState<
    PropertyListingProps[]
  >(SAMPLE_DATA.filter((property) => property.favorite));

  const handleRemoveFromSaved = (propertyName: string) => {
    Alert.alert(
      "Remove from Saved",
      `Are you sure you want to remove "${propertyName}" from your saved properties?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            setSavedProperties((prev) =>
              prev.filter((property) => property.propertyName !== propertyName)
            );
          },
        },
      ]
    );
  };

  const handleClearAll = () => {
    Alert.alert(
      "Clear All Saved",
      "Are you sure you want to remove all properties from your saved list?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear All",
          style: "destructive",
          onPress: () => {
            setSavedProperties([]);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Saved Properties</Text>
          <Text style={styles.headerSubtitle}>
            {savedProperties.length}{" "}
            {savedProperties.length === 1 ? "property" : "properties"} saved
          </Text>
        </View>
        {savedProperties.length > 0 && (
          <TouchableOpacity
            style={styles.clearAllButton}
            onPress={handleClearAll}
          >
            <Feather name="trash-2" size={20} color="#E50000" />
          </TouchableOpacity>
        )}
      </View>

      {/* Content */}
      {savedProperties.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyIconContainer}>
            <Feather name="heart" size={64} color="#E9E9E9" />
          </View>
          <Text style={styles.emptyTitle}>No Saved Properties</Text>
          <Text style={styles.emptySubtitle}>
            Properties you save will appear here. Start exploring and save your
            favorites!
          </Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>Explore Properties</Text>
            <Feather name="arrow-right" size={16} color="#34967C" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.content}>
          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionButton}>
              <MaterialIcons name="share" size={20} color="#34967C" />
              <Text style={styles.actionButtonText}>Share List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Feather name="filter" size={20} color="#34967C" />
              <Text style={styles.actionButtonText}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Feather name="sort-asc" size={20} color="#34967C" />
              <Text style={styles.actionButtonText}>Sort</Text>
            </TouchableOpacity>
          </View>

          {/* Saved Properties List */}
          <ScrollView
            style={styles.listingsContainer}
            showsVerticalScrollIndicator={false}
          >
            <PropertyListing listings={savedProperties} />
          </ScrollView>
        </View>
      )}

      {/* Bottom Info */}
      {savedProperties.length > 0 && (
        <View style={styles.bottomInfo}>
          <View style={styles.infoItem}>
            <MaterialIcons name="info-outline" size={16} color="#7E7B7B" />
            <Text style={styles.infoText}>
              Tap and hold on a property to see more options
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#7E7B7B",
    fontWeight: "400",
  },
  clearAllButton: {
    backgroundColor: "#FFE5E5",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  emptyIconContainer: {
    backgroundColor: "#F9F9F9",
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#7E7B7B",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
  },
  exploreButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F9F6",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#34967C",
  },
  exploreButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#34967C",
    marginRight: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    paddingVertical: 15,
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#34967C",
    marginLeft: 6,
  },
  listingsContainer: {
    flex: 1,
  },
  bottomInfo: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#F9F9F9",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    fontSize: 12,
    color: "#7E7B7B",
    marginLeft: 6,
    fontStyle: "italic",
  },
});

export default Saved;
