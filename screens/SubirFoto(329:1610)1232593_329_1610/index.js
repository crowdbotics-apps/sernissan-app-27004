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
      <View style={styles.View_329_1611} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/589a/9dbc/e980d26fbc13272f4e1246a59c182729"
        }}
        style={styles.ImageBackground_329_1622}
      />
      <View style={styles.View_329_1623}>
        <View style={styles.View_329_1624}>
          <Text style={styles.Text_329_1624}>Agregar Imagen</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9528/eba8/88571876d1ef73c574f2f4613cb3722b"
          }}
          style={styles.ImageBackground_329_1625}
        />
      </View>
      <View style={styles.View_329_1626}>
        <Text style={styles.Text_329_1626}>Tomar una foto</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("329_1614"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65b4/63bb/98cc3af6fbaae3d82f54f9bbdc4f850d"
          }}
          style={styles.ImageBackground_329_1627}
        />
      </TouchableOpacity>
      <View style={styles.View_329_1612}>
        <View style={styles.View_329_1613}>
          <View style={styles.View_329_1614} />
        </View>
      </View>
      <View style={styles.View_329_1617}>
        <Text style={styles.Text_329_1617}>Subir imagen</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_329_1611: {
    width: wp("100%"),
    height: hp("112.87878787878789%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_329_1622: {
    width: wp("9.316770186335404%"),
    minWidth: wp("9.316770186335404%"),
    height: hp("22.727272727272727%"),
    minHeight: hp("22.727272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.453416149068323%"),
    top: hp("73.48484848484848%"),
    resizeMode: "cover"
  },
  View_329_1623: {
    width: wp("52.17391304347826%"),
    minWidth: wp("52.17391304347826%"),
    height: hp("22.727272727272727%"),
    minHeight: hp("22.727272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.453416149068323%"),
    top: hp("38.63636363636363%")
  },
  View_329_1624: {
    width: wp("39.75155279503105%"),
    minWidth: wp("39.75155279503105%"),
    minHeight: hp("13.636363636363635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.422360248447204%"),
    top: hp("4.545454545454547%")
  },
  Text_329_1624: {
    color: "rgba(24, 20, 35, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_329_1625: {
    width: wp("9.316770186335404%"),
    minWidth: wp("9.316770186335404%"),
    height: hp("22.727272727272727%"),
    minHeight: hp("22.727272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_329_1626: {
    width: wp("38.19875776397515%"),
    minWidth: wp("38.19875776397515%"),
    minHeight: hp("13.636363636363635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.875776397515526%"),
    top: hp("78.78787878787878%")
  },
  Text_329_1626: {
    color: "rgba(24, 20, 35, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_329_1627: {
    width: wp("85.71428571428571%"),
    minWidth: wp("85.71428571428571%"),
    height: hp("0.000018279308388821047%"),
    minHeight: hp("0.000018279308388821047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.453416149068323%"),
    top: hp("68.93939393939394%")
  },
  View_329_1612: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("46.42857060287938%"),
    minHeight: hp("46.42857060287938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.5714814157197%")
  },
  View_329_1613: {
    width: wp("100%"),
    height: hp("46.42857060287938%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_329_1614: {
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
  View_329_1617: {
    width: wp("85.71428571428571%"),
    minWidth: wp("85.71428571428571%"),
    minHeight: hp("15.151515151515152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.453416149068323%"),
    top: hp("15.151515151515152%")
  },
  Text_329_1617: {
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
