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
      <View style={styles.View_293_230}>
        <View style={styles.View_I293_230_281_1544}>
          <View style={styles.View_I293_230_281_1545}>
            <View style={styles.View_I293_230_281_1546} />
            <View style={styles.View_I293_230_281_1547} />
          </View>
          <View style={styles.View_I293_230_281_1548} />
        </View>
        <View style={styles.View_I293_230_281_1549}>
          <Text style={styles.Text_I293_230_281_1549}>Nissan</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("284_1804"))
        }
      >
        <View style={styles.View_293_231} />
      </TouchableOpacity>
      <View style={styles.View_293_232}>
        <Text style={styles.Text_293_232}>RECUPERAR CONTRASEÑA</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("256_1530"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea8b/a732/19df9b6efc05cf9855deb0f30f6a978d"
          }}
          style={styles.ImageBackground_293_234}
        />
      </TouchableOpacity>
      <View style={styles.View_357_190}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/404e/0ff8/2f7c56d67be041bfce26e4bac6a05dc8"
          }}
          style={styles.ImageBackground_357_191}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100.5464480874317%") },
  View_293_230: {
    width: wp("79.22705314009661%"),
    minWidth: wp("79.22705314009661%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("39.20765027322404%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I293_230_281_1544: {
    flexGrow: 1,
    width: wp("79.22705314009661%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I293_230_281_1545: {
    width: wp("79.22705314009661%"),
    minWidth: wp("79.22705314009661%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I293_230_281_1546: {
    flexGrow: 1,
    width: wp("79.22705314009661%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(98, 0, 238, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I293_230_281_1547: {
    flexGrow: 1,
    width: wp("78.74396135265701%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980784%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(98, 0, 238, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I293_230_281_1548: {
    flexGrow: 1,
    width: wp("73.91304347826086%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6570048309178755%"),
    top: hp("0%"),
    backgroundColor: "rgba(98, 0, 238, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I293_230_281_1549: {
    flexGrow: 1,
    width: wp("12.318840579710146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169094%"),
    top: hp("2.185792349726782%")
  },
  Text_I293_230_281_1549: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_293_231: {
    width: wp("79.22705314009661%"),
    minWidth: wp("79.22705314009661%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("49.04371584699454%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_293_232: {
    width: wp("53.62318840579711%"),
    minWidth: wp("53.62318840579711%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.463768115942027%"),
    top: hp("51.502732240437155%")
  },
  Text_293_232: {
    color: "rgba(204, 32, 49, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  ImageBackground_293_234: {
    width: wp("8.695652173913043%"),
    height: hp("4.918032786885246%"),
    top: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%")
  },
  View_357_190: {
    width: wp("76.81159420289855%"),
    minWidth: wp("76.81159420289855%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("28.005464480874316%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_357_191: {
    width: wp("70.68373822935537%"),
    height: hp("4.9357857209085765%"),
    top: hp("1.4169265663688968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.072456691576088%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
