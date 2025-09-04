import { Dimensions, StyleSheet } from "react-native";

// Constants for reusable values
const COLORS = {
  white: "#fff",
  primary: "#34967C",
  textPrimary: "#000",
  textSecondary: "#7E7B7B",
  border: "#E9E9E9",
  divider: "#e6e6e6",
  dividerText: "#C2C2C2",
  accent: "#FFA800",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 12,
  medium: 18,
  large: 24,
  xlarge: 40,
};

const BORDER_RADIUS = {
  small: 10,
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },
  largeText: {
    fontWeight: 700,
    fontSize: 39,
    color: COLORS.textPrimary,
    marginTop: 20,
  },
  smallText: {
    fontWeight: 400,
    fontSize: FONT_SIZE.small,
    color: COLORS.textSecondary,
    marginTop: 10,
  },
  formGroup: {
    marginTop: 44,
    rowGap: 10,
  },
  placeholderText: {
    fontSize: FONT_SIZE.medium,
    fontWeight: 400,
    color: COLORS.textSecondary,
    marginBottom: 7,
  },
  inputField: {
    borderWidth: 2,
    height: 50,
    borderRadius: BORDER_RADIUS.small,
    borderColor: COLORS.border,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  passwordGroup: {
    borderWidth: 2,
    height: 50,
    borderRadius: BORDER_RADIUS.small,
    borderColor: COLORS.border,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: COLORS.primary,
    marginTop: 9,
    fontSize: 14,
  },
  button: {
    backgroundColor: COLORS.primary,
    height: 53,
    borderRadius: BORDER_RADIUS.small,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: 300,
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: COLORS.divider,
  },
  dividerText: {
    fontSize: 17,
    fontWeight: 500,
    fontVariant: ["small-caps"],
    color: COLORS.dividerText,
  },
  socialMediaButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  socialMediaButton: {
    height: 53,
    borderRadius: BORDER_RADIUS.small,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  socialMediaButtonText: {
    fontSize: 18,
    fontWeight: 400,
    color: COLORS.textPrimary,
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 19,
    position: "absolute",
    left: 77,
    right: 76,
    bottom: 33,
  },
  subText: {
    fontSize: 18,
    fontWeight: 400,
    color: COLORS.textPrimary,
  },
  subTextJoin: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.accent,
  },
});

export { styles };
