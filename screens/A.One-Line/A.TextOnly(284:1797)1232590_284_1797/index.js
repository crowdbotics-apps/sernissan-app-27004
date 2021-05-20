import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11af/c5dd/7725d249df0e1a09b0c8a7cf8886fe59"
        }}
        style={styles.ImageBackground_284_1798}
      />
      <View style={styles.View_284_1799}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dd8/058f/af2b899aa00896412a41e7cefbef5483"
          }}
          style={styles.ImageBackground_284_1800}
        />
      </View>
      <View style={styles.View_284_1801} />
      <View style={styles.View_284_1802} />
      <View style={styles.View_284_1803}>
        <Text style={styles.Text_284_1803}>
          Te enviamos un token para que puedas acceder
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_284_1798: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("87.27272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.2727272727272725%")
  },
  View_284_1799: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("87.27272727272727%"),
    minHeight: hp("87.27272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.2727272727272725%")
  },
  ImageBackground_284_1800: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("87.27272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_284_1801: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("87.27272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.2727272727272725%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.8700000047683716,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_284_1802: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("87.27272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.2727272727272725%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.8700000047683716,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_284_1803: {
    width: wp("100%"),
    minHeight: hp("87.27272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.2727272727272725%")
  },
  Text_284_1803: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
