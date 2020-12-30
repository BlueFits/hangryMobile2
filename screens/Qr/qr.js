import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../store/actions/restaurants";
import {
  DefaultText,
  HeaderText,
  SmallText,
} from "../../controllers/TextController";
import { normalize } from "../../controllers/FontController";
export default function App({ navigation }) {
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      if (hasPermission === null || hasPermission === false) {
        setModalVisible(true);
      }
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    dispatch(setRestaurant(data));
    navigation.navigate("Menu");
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.container}>
          <HeaderText style={styles.title}>Camera Access</HeaderText>
          <DefaultText style={styles.body}>
            Hangry uses your camera to scan restaurant QR codes and view menu
            items!
          </DefaultText>

          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={styles.button}
          >
            <HeaderText style={{ color: "#fff", fontSize: normalize(13) }}>
              OK
            </HeaderText>
          </TouchableOpacity>
        </View>
      </Modal>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
    height: "30%",
    top: "30%",
    left: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 15,
  },
  title: {
    bottom: "25%",
    fontSize: normalize(20),
  },
  body: {
    bottom: "15%",
    width: "90%",
    fontSize: normalize(13),
    textAlign: "center",
  },
  button: {
    position: "absolute",
    top: "70%",
    height: "20%",
    width: "60%",
    backgroundColor: "#F55E2D",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
  },
});
