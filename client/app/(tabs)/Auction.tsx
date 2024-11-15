import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import useUser from "@/stores/userStore";
import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";
import styles, { COLORS } from "../stylesAuction";
// Import icons from assets
import SettingsIcon from "@/assets/images/settings_icon.webp";
import UploadIcon from "@/assets/images/upload_photo.webp";

const Auction = () => {
  const [auctionItems, setAuctionItems] = useState([]);
  const router = useRouter();
  const { username, isLoggedIn } = useUser();

  useEffect(() => {
    const fetchAuctionItems = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/products");
        const data = await response.json();
        const formattedData = data.map((item) => ({
          id: item.id,
          name: item.name,
          image: { uri: item.imgUrl },
          currentBid: item.startPrice,
          timeLeft: "TBD", // Update this to calculate actual time left
          totalBids: 0, // Replace with actual bid count if available
          seller: item.sellerName,
          description: item.description,
        }));
        setAuctionItems(formattedData);
      } catch (error) {
        console.error("Error fetching auction items:", error);
      }
    };

    fetchAuctionItems();
  }, []);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (!isLoggedIn) {
        router.push("/");
      }
    }, 1000);

    return () => clearTimeout(redirectTimer);
  }, [isLoggedIn, router]);

  const handleBid = (item) => {
    console.log(`Placing bid on ${item.name}`);
  };

  const handleSettingsPress = () => {
    console.log("Settings pressed");
  };

  const handleUploadPress = () => {
    console.log("Upload pressed");
  };

  const handleItemPress = (item) => {
    console.log(`Pressed ${item.name}`);
    console.log(`ID: ${item.id}`);
    router.push({
      pathname: "/(tabs)/details",
      params: { product: item.id },
    });
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingSpinner} />
        <Text style={styles.loadingText}>Redirecting...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={[COLORS.light, COLORS.white]} style={styles.gradient}>
        <BlurView intensity={80} style={styles.blurContainer}>
          <Header
            username={username}
            onSettingsPress={handleSettingsPress}
            onUploadPress={handleUploadPress}
          />
          <ScrollView
            style={styles.auctionContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {auctionItems.map((item) => (
              <Pressable key={item.id} onPress={() => handleItemPress(item)}>
                <AuctionItem key={item.id} item={item} onBid={handleBid} />
              </Pressable>
            ))}
          </ScrollView>
        </BlurView>
      </LinearGradient>
    </View>
  );
};

const Header = ({ username, onSettingsPress, onUploadPress }) => (
  <Animatable.View animation="fadeIn" style={styles.headerContainer}>
    <View style={styles.headerSurface}>
      <View style={styles.headerTop}>
        <IconButton icon={SettingsIcon} onPress={onSettingsPress} />
        <Text style={styles.header}>Farmify Auctions</Text>
        <IconButton icon={UploadIcon} onPress={onUploadPress} />
      </View>
      <Text style={styles.welcomeText}>Welcome, {username}</Text>
    </View>
  </Animatable.View>
);

const IconButton = ({ icon, onPress }) => (
  <TouchableOpacity style={styles.iconButton} onPress={onPress}>
    <Image source={icon} style={styles.icon} />
  </TouchableOpacity>
);

const AuctionItem = ({ item, onBid }) => (
  <Animatable.View animation="fadeInUp" duration={800} delay={200}>
    <View style={styles.itemCard}>
      <View style={styles.itemHeader}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemHeaderText}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemSeller}>{item.seller}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.totalBids}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.bidInfo}>
        <Chip label={`⏰ ${item.timeLeft}`} />
        <Chip label={`💰 $${item.currentBid.toFixed(2)}`} />
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.bidButton} onPress={() => onBid(item)}>
          <Text style={styles.bidButtonText}>Place Bid</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Animatable.View>
);

const Chip = ({ label }) => (
  <View style={styles.chip}>
    <Text style={styles.chipText}>{label}</Text>
  </View>
);

export default Auction;
