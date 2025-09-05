import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Message {
  id: string;
  sender: string;
  senderType: "host" | "guest" | "system";
  message: string;
  timestamp: string;
  isRead: boolean;
  propertyName?: string;
}

const Inbox = () => {
  const [activeTab, setActiveTab] = useState<"all" | "unread" | "bookings">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Sample messages data
  const [messages] = useState<Message[]>([
    {
      id: "1",
      sender: "Sarah Johnson",
      senderType: "host",
      message:
        "Hi! I've approved your booking for Villa Arrciffee Beach House. Check-in is at 3 PM.",
      timestamp: "2 hours ago",
      isRead: false,
      propertyName: "Villa Arrciffee Beach House",
    },
    {
      id: "2",
      sender: "Mike Chen",
      senderType: "host",
      message:
        "Welcome to Sunset Paradise Villa! Here are the check-in instructions...",
      timestamp: "1 day ago",
      isRead: true,
      propertyName: "Sunset Paradise Villa",
    },
    {
      id: "3",
      sender: "ProDev Support",
      senderType: "system",
      message:
        "Your payment for Golden Sands Retreat has been processed successfully.",
      timestamp: "2 days ago",
      isRead: true,
      propertyName: "Golden Sands Retreat",
    },
    {
      id: "4",
      sender: "Emma Wilson",
      senderType: "host",
      message:
        "Thank you for choosing Azure Horizon Cottage! We look forward to hosting you.",
      timestamp: "3 days ago",
      isRead: false,
      propertyName: "Azure Horizon Cottage",
    },
    {
      id: "5",
      sender: "David Park",
      senderType: "host",
      message: "Quick question about your upcoming stay at Palm Haven Villa...",
      timestamp: "1 week ago",
      isRead: true,
      propertyName: "Palm Haven Villa",
    },
  ]);

  const getFilteredMessages = () => {
    let filtered = messages;

    if (activeTab === "unread") {
      filtered = filtered.filter((msg) => !msg.isRead);
    } else if (activeTab === "bookings") {
      filtered = filtered.filter((msg) => msg.senderType === "host");
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (msg) =>
          msg.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
          msg.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (msg.propertyName &&
            msg.propertyName.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  };

  const getUnreadCount = () => {
    return messages.filter((msg) => !msg.isRead).length;
  };

  const getSenderIcon = (senderType: string) => {
    switch (senderType) {
      case "host":
        return <Ionicons name="person-circle" size={24} color="#34967C" />;
      case "system":
        return <MaterialIcons name="support-agent" size={24} color="#7E7B7B" />;
      default:
        return <Ionicons name="person" size={24} color="#34967C" />;
    }
  };

  const formatTime = (timestamp: string) => {
    return timestamp;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
        <Text style={styles.headerSubtitle}>
          {getUnreadCount()} unread messages
        </Text>
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
            placeholder="Search messages..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#7E7B7B"
          />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "all" && styles.activeTab]}
          onPress={() => setActiveTab("all")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "all" && styles.activeTabText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "unread" && styles.activeTab]}
          onPress={() => setActiveTab("unread")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "unread" && styles.activeTabText,
            ]}
          >
            Unread ({getUnreadCount()})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "bookings" && styles.activeTab]}
          onPress={() => setActiveTab("bookings")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "bookings" && styles.activeTabText,
            ]}
          >
            Bookings
          </Text>
        </TouchableOpacity>
      </View>

      {/* Messages List */}
      <ScrollView
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        {getFilteredMessages().length === 0 ? (
          <View style={styles.emptyState}>
            <View style={styles.emptyIconContainer}>
              <Ionicons name="chatbubbles-outline" size={64} color="#E9E9E9" />
            </View>
            <Text style={styles.emptyTitle}>No Messages</Text>
            <Text style={styles.emptySubtitle}>
              {activeTab === "unread"
                ? "You're all caught up! No unread messages."
                : "No messages found. Start a conversation with a host!"}
            </Text>
          </View>
        ) : (
          getFilteredMessages().map((message) => (
            <TouchableOpacity key={message.id} style={styles.messageItem}>
              <View style={styles.messageHeader}>
                <View style={styles.senderInfo}>
                  {getSenderIcon(message.senderType)}
                  <View style={styles.senderDetails}>
                    <Text style={styles.senderName}>{message.sender}</Text>
                    {message.propertyName && (
                      <Text style={styles.propertyName}>
                        {message.propertyName}
                      </Text>
                    )}
                  </View>
                </View>
                <View style={styles.messageMeta}>
                  <Text style={styles.timestamp}>
                    {formatTime(message.timestamp)}
                  </Text>
                  {!message.isRead && <View style={styles.unreadDot} />}
                </View>
              </View>
              <Text style={styles.messageText} numberOfLines={2}>
                {message.message}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>

      {/* Compose Button */}
      <TouchableOpacity style={styles.composeButton}>
        <Feather name="edit-3" size={24} color="#fff" />
      </TouchableOpacity>
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
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    marginHorizontal: 20,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#34967C",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#7E7B7B",
  },
  activeTabText: {
    color: "#fff",
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  messageItem: {
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#34967C",
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  senderInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  senderDetails: {
    marginLeft: 12,
    flex: 1,
  },
  senderName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  propertyName: {
    fontSize: 12,
    color: "#7E7B7B",
    fontWeight: "400",
  },
  messageMeta: {
    alignItems: "flex-end",
  },
  timestamp: {
    fontSize: 12,
    color: "#7E7B7B",
    marginBottom: 4,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#34967C",
  },
  messageText: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingTop: 60,
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
  },
  composeButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#34967C",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default Inbox;
