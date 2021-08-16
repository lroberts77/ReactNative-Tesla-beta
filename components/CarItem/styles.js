import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    car_container: {
        width: '100%',
        height: '100%',
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
      },
      subtitle: {
        fontSize: 18,
        color: 'dimgrey',
      },
      taglineCTA: {
        textDecorationLine: 'underline',
      },
      bg_image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      btns_container: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
      },
});

export default styles;