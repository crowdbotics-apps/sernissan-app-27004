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
      <View style={styles.View_284_1805} />
      <View style={styles.View_284_1806}>
        <View style={styles.View_284_1807}>
          <View style={styles.View_284_1808} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("256_1530"))
        }
      >
        <View style={styles.View_284_1810}>
          <View style={styles.View_I284_1810_0_670} />
          <View style={styles.View_I284_1810_0_666} />
          <View style={styles.View_I284_1810_0_671} />
          <View style={styles.View_I284_1810_0_668}>
            <Text style={styles.Text_I284_1810_0_668}>ir al inicio</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_284_1811}>
        <Text style={styles.Text_284_1811}>
          Te enviamos un mail con tu nueva contraseña.{" "}
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_284_1805: {
    width: wp("100%"),
    height: hp("81.06060606060606%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_284_1806: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("46.42857060287938%"),
    minHeight: hp("46.42857060287938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.57138893821023%")
  },
  View_284_1807: {
    width: wp("100%"),
    height: hp("46.42857060287938%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_284_1808: {
    width: wp("100%"),
    height: hp("46.42857060287938%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_284_1810: {
    width: wp("31.05590062111801%"),
    minWidth: wp("31.05590062111801%"),
    height: hp("27.27272727272727%"),
    minHeight: hp("27.27272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.975155279503106%"),
    top: hp("46.21212121212121%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I284_1810_0_670: {
    flexGrow: 1,
    width: wp("31.05590062111801%"),
    height: hp("27.27272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I284_1810_0_666: {
    flexGrow: 1,
    width: wp("31.05590062111801%"),
    height: hp("37.121212121212125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-9.848484848484844%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I284_1810_0_671: {
    flexGrow: 1,
    width: wp("31.05590062111801%"),
    height: hp("27.27272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.11999999731779099,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I284_1810_0_668: {
    flexGrow: 1,
    width: wp("28.26086956521739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478258%"),
    top: hp("7.575757575757571%")
  },
  Text_I284_1810_0_668: {
    color: "rgba(204, 32, 49, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_284_1811: {
    width: wp("85.71428571428571%"),
    minWidth: wp("85.71428571428571%"),
    minHeight: hp("30.303030303030305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.453416149068323%"),
    top: hp("15.909090909090908%")
  },
  Text_284_1811: {
    color: "rgba(0, 0, 0, 1)",
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
