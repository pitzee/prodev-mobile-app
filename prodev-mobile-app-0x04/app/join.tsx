import { styles } from "@/styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/Logo.png")} />
        </View>

        <Text style={styles.largeText}>Create your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>Enter your details to sign up.</Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Full name</Text>
            <TextInput style={styles.inputField} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Confirm password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join now</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Already have an account?</Text>
          <Text style={styles.subTextJoin}>Sign in</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
