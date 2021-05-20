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
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("284_1570"))
        }
      >
        <View style={styles.View_281_1543}>
          <View style={styles.View_281_1544}>
            <View style={styles.View_281_1545}>
              <View style={styles.View_281_1546} />
              <View style={styles.View_281_1547} />
            </View>
            <View style={styles.View_281_1548} />
          </View>
          <View style={styles.View_281_1549}>
            <Text style={styles.Text_281_1549}>Usuario</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("284_1570"))
        }
      >
        <View style={styles.View_455_10}>
          <View style={styles.View_I455_10_281_1544}>
            <View style={styles.View_I455_10_281_1545}>
              <View style={styles.View_I455_10_281_1546} />
              <View style={styles.View_I455_10_281_1547} />
            </View>
            <View style={styles.View_I455_10_281_1548} />
          </View>
          <View style={styles.View_I455_10_281_1549}>
            <Text style={styles.Text_I455_10_281_1549}>Contraseña</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_455_17}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9829/b845/ae15491a14bd22ec54389d5875f0df3d"
          }}
          style={styles.ImageBackground_I455_17_0_410}
        />
      </View>
      <View style={styles.View_281_1550} />
      <View style={styles.View_281_1551}>
        <Text style={styles.Text_281_1551}>IniciAR Sesión</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("284_1868"))
        }
      >
        <View style={styles.View_281_1552}>
          <Text style={styles.Text_281_1552}>¿Olvidaste tu usuario?</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_357_0}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/404e/0ff8/2f7c56d67be041bfce26e4bac6a05dc8"
          }}
          style={styles.ImageBackground_357_1}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100.5464480874317%") },
  View_281_1543: {
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
  View_281_1544: {
    flexGrow: 1,
    width: wp("79.22705314009661%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_281_1545: {
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
  View_281_1546: {
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
  View_281_1547: {
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
  View_281_1548: {
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
  View_281_1549: {
    flexGrow: 1,
    width: wp("13.526570048309178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169094%"),
    top: hp("2.185792349726782%")
  },
  Text_281_1549: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_455_10: {
    width: wp("79.22705314009661%"),
    minWidth: wp("79.22705314009661%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("49.04371584699454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I455_10_281_1544: {
    flexGrow: 1,
    width: wp("79.22705314009661%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I455_10_281_1545: {
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
  View_I455_10_281_1546: {
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
  View_I455_10_281_1547: {
    flexGrow: 1,
    width: wp("78.74396135265701%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980784%"),
    top: hp("0.1366120218579212%"),
    backgroundColor: "rgba(98, 0, 238, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I455_10_281_1548: {
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
  View_I455_10_281_1549: {
    flexGrow: 1,
    width: wp("20.28985507246377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169094%"),
    top: hp("2.1857923497267677%")
  },
  Text_I455_10_281_1549: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_455_17: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.59876313877567%"),
    top: hp("51.229508196721305%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I455_17_0_410: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2415458937198025%"),
    top: hp("0.6830601092896273%")
  },
  View_281_1550: {
    width: wp("79.22705314009661%"),
    minWidth: wp("79.22705314009661%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("59.59568544815147%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_281_1551: {
    width: wp("31.88405797101449%"),
    minWidth: wp("31.88405797101449%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("62.054701841594095%")
  },
  Text_281_1551: {
    color: "rgba(204, 32, 49, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_281_1552: {
    width: wp("35.26570048309179%"),
    minWidth: wp("35.26570048309179%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.642512077294686%"),
    top: hp("69.02191495634818%")
  },
  Text_281_1552: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "none"
  },
  View_357_0: {
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
  ImageBackground_357_1: {
    width: wp("70.68373822935537%"),
    height: hp("4.9357857209085765%"),
    top: hp("1.4169265663688968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0724640629717683%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
