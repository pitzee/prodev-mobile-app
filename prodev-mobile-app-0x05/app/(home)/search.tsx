import PropertyListing from "@/components/common/PropertyListing";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";
import { PropertyListingProps } from "@/interfaces";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [filteredData, setFilteredData] =
    useState<PropertyListingProps[]>(SAMPLE_DATA);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    let filtered = SAMPLE_DATA;

    if (query.trim()) {
      filtered = filtered.filter(
        (property) =>
          property.propertyName.toLowerCase().includes(query.toLowerCase()) ||
          property.location.city.toLowerCase().includes(query.toLowerCase()) ||
          property.location.country.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedFilter) {
      filtered = filtered.filter((property) =>
        property.propertyName
          .toLowerCase()
          .includes(selectedFilter.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  const handleFilterSelect = (filter: string) => {
    const newFilter = selectedFilter === filter ? null : filter;
    setSelectedFilter(newFilter);

    let filtered = SAMPLE_DATA;

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (property) =>
          property.propertyName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          property.location.city
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          property.location.country
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    if (newFilter) {
      filtered = filtered.filter((property) =>
        property.propertyName.toLowerCase().includes(newFilter.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search Properties</Text>
        <Text style={styles.headerSubtitle}>Find your perfect stay</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Feather
            name="search"
            size={20}
            color="#7E7B7B"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by location, property name..."
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor="#7E7B7B"
          />
        </View>
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <Text style={styles.filtersTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
        >
          {FILTERS.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterChip,
                selectedFilter === filter && styles.filterChipActive,
              ]}
              onPress={() => handleFilterSelect(filter)}
            >
              <Text
                style={[
                  styles.filterChipText,
                  selectedFilter === filter && styles.filterChipTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Results */}
      <View style={styles.resultsContainer}>
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>
            {filteredData.length} Properties Found
          </Text>
          {selectedFilter && (
            <TouchableOpacity
              style={styles.clearFilterButton}
              onPress={() => handleFilterSelect(selectedFilter)}
            >
              <Text style={styles.clearFilterText}>Clear Filter</Text>
            </TouchableOpacity>
          )}
        </View>

        <ScrollView
          style={styles.listingsContainer}
          showsVerticalScrollIndicator={false}
        >
          <PropertyListing listings={filteredData} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
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
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: "#E9E9E9",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  filtersContainer: {
    marginBottom: 20,
  },
  filtersTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  filtersScroll: {
    paddingLeft: 20,
  },
  filterChip: {
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E9E9E9",
  },
  filterChipActive: {
    backgroundColor: "#34967C",
    borderColor: "#34967C",
  },
  filterChipText: {
    fontSize: 14,
    color: "#7E7B7B",
    fontWeight: "500",
  },
  filterChipTextActive: {
    color: "#fff",
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  clearFilterButton: {
    backgroundColor: "#FFE5E5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  clearFilterText: {
    fontSize: 12,
    color: "#E50000",
    fontWeight: "500",
  },
  listingsContainer: {
    flex: 1,
  },
});

export default Search;
