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
      "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
      "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
      "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
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
