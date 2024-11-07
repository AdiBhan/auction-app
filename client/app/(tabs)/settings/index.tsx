import React, { useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import useUser from "@/stores/userStore";
import * as Animatable from 'react-native-animatable';
import { BlurView } from 'expo-blur';

// Import icons from assets
import SettingsIcon from "@/assets/images/settings_icon.webp";
import UploadIcon from "@/assets/images/upload_photo.webp";

// Define colors directly in the file to avoid dependency issues
const COLORS = {
  primary: "#007AFF",
  secondary: "#5856D6",
  white: "#FFFFFF",
  light: "#F5F5F5",
  gray: "#808080",
  black: "#000000",
  background: "#F9F9F9",
};

export default function SettingsScreen() {
  const router = useRouter();
  const { username, isLoggedIn, role } = useUser(); // Assume 'role' is either 'Buyer' or 'Seller'
  const redirectTimerRef = useRef(null);

  useEffect(() => {
    redirectTimerRef.current = setTimeout(() => {
      if (typeof window !== "undefined" && !isLoggedIn) {
        router.push("/");
      }
    }, 1000);

    return () => clearTimeout(redirectTimerRef.current);
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return (
      <View style={styles.loadingContainer}>
        <Animatable.View
          animation="rotate"
          iterationCount="infinite"
          style={styles.loadingSpinner}
        />
        <Text style={styles.loadingText}>Redirecting...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={[COLORS.light, COLORS.white]} style={styles.gradient}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Settings</Text>
          </View>

          <View style={styles.settingsSection}>
            {role === "Buyer" ? (
              <>
                <TouchableOpacity style={styles.settingsItem} onPress={() => router.push("/buyerUpdateContact")}>
                  <BlurView intensity={30} style={StyleSheet.absoluteFill} />
                  <Image source={SettingsIcon} style={styles.icon} />
                  <Text style={styles.settingsText}>Update Contact Details</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsItem} onPress={() => router.push("/buyerModifyRatings")}>
                  <BlurView intensity={30} style={StyleSheet.absoluteFill} />
                  <Image source={SettingsIcon} style={styles.icon} />
                  <Text style={styles.settingsText}>Modify Past Ratings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsItem} onPress={() => router.push("/updatePaymentInfo")}>
                  <BlurView intensity={30} style={StyleSheet.absoluteFill} />
                  <Image source={SettingsIcon} style={styles.icon} />
                  <Text style={styles.settingsText}>Payment Information</Text>
                </TouchableOpacity>
              </>
            ) : role === "Seller" ? (
              <>
                <TouchableOpacity style={styles.settingsItem} onPress={() => router.push("/update-business")}>
                  <BlurView intensity={30} style={StyleSheet.absoluteFill} />
                  <Image source={SettingsIcon} style={styles.icon} />
                  <Text style={styles.settingsText}>Update Business Information</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsItem} onPress={() => router.push("/update-about")}>
                  <BlurView intensity={30} style={StyleSheet.absoluteFill} />
                  <Image source={SettingsIcon} style={styles.icon} />
                  <Text style={styles.settingsText}>Update About Page</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsItem} onPress={() => router.push("/update-auction")}>
                  <BlurView intensity={30} style={StyleSheet.absoluteFill} />
                  <Image source={SettingsIcon} style={styles.icon} />
                  <Text style={styles.settingsText}>Update Auction</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsItem} onPress={() => router.push("/upload-photo")}>
                  <BlurView intensity={30} style={StyleSheet.absoluteFill} />
                  <Image source={UploadIcon} style={styles.icon} />
                  <Text style={styles.settingsText}>Upload Photo</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity style={styles.settingsItem} onPress={() => router.push("/settings/buyerSettings/updateContact")}>
                  <BlurView intensity={30} style={StyleSheet.absoluteFill} />
                  <Image source={SettingsIcon} style={styles.icon} />
                  <Text style={styles.settingsText}>Update Contact Details</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsItem} onPress={() => router.push("/modify-ratings")}>
                  <BlurView intensity={30} style={StyleSheet.absoluteFill} />
                  <Image source={SettingsIcon} style={styles.icon} />
                  <Text style={styles.settingsText}>Modify Past Ratings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsItem} onPress={() => router.push("/settings/buyerSettings/updatePaymentInfo")}>
                  <BlurView intensity={30} style={StyleSheet.absoluteFill} />
                  <Image source={SettingsIcon} style={styles.icon} />
                  <Text style={styles.settingsText}>Payment Information</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  loadingSpinner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.primary,
    borderTopColor: 'transparent',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: COLORS.gray,
  },
  settingsSection: {
    padding: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  settingsText: {
    fontSize: 16,
    color: COLORS.black,
  },
  noOptionsText: {
    fontSize: 16,
    color: COLORS.gray,
    textAlign: 'center',
    paddingTop: 20,
  },
});