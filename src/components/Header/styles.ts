import { StyleSheet } from "react-native";
import { HPX, WPX } from "../../utils/responsiveness";
import { ColorPane } from "../../theme/colorScheme";

/* @ts-ignore */
export const createStyles = (colors) =>
  StyleSheet.create({
    header: {
      height: HPX(64),
      width: "100%",
      justifyContent: "space-between",
      backgroundColor: ColorPane.midnight,
      flexDirection: "row",
      paddingHorizontal: WPX(15),
      alignItems: "center",
    },
    subContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    txt: { color: "white", fontSize: 16, fontWeight: "bold" },
    subtxt: { color: ColorPane.lightGrey, fontSize: 13, top: 2 },

    // Avatar (Initial Circle)
    avatar: {
      height: WPX(40),
      width: WPX(40),
      borderRadius: WPX(20),
      alignItems: "center",
      justifyContent: "center",
    },
    avatarText: {
      color: colors.white,
      fontSize: WPX(18),
      fontWeight: "bold",
    },
  });
