import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const normalize = (size) => {
  const scale = SCREEN_WIDTH / 320;
  console.log(size);
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const DefaultText = (props) => {
  return (
    <Text
      style={{
        fontFamily: "roboto-regular",
        ...styles.defaultText,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
};
