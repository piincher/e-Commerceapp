import React from "react";
import react, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

export const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    setBanner([
      "https://res.cloudinary.com/piincher/image/upload/v1659006533/myma_cho7oe.jpg",
      "https://res.cloudinary.com/piincher/image/upload/v1659006547/panier_otdmls.jpg",
      "https://res.cloudinary.com/piincher/image/upload/v1635337070/rfnkpyjea6w2lc99bijb.jpg",
    ]);

    return () => {
      setBanner([]);
    };
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2}
            style={{ height: width / 2 }}
          >
            {banner.map((item) => {
              return (
                <React.Fragment key={item}>
                  <Image
                    key={item}
                    source={{ uri: item }}
                    resizeMode="contain"
                    style={styles.imageContainer}
                  />
                </React.Fragment>
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    //backgroundColor: "gainsboro",
    alignItems: "center",
    justifyContent: "center",
  },
  swiper: {
    width,
    alignItems: "center",
    marginTop: 20,
  },
  imageContainer: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
