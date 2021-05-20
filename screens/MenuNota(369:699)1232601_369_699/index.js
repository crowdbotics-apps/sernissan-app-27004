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
      <View style={styles.View_369_700} />
      <View style={styles.View_408_27}>
        <View style={styles.View_408_28}>
          <Text style={styles.Text_408_28}>Perfil</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e2/066c/854b58b306f571c33a5ce305f20cfd89"
          }}
          style={styles.ImageBackground_408_24}
        />
      </View>
      <View style={styles.View_408_35}>
        <View style={styles.View_408_36}>
          <Text style={styles.Text_408_36}>Monitoreo</Text>
        </View>
        <View style={styles.View_408_37}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f7a/5a45/7ccf5a1bbe312484705b37229addbd74"
            }}
            style={styles.ImageBackground_I408_37_0_109}
          />
        </View>
      </View>
      <View style={styles.View_408_42}>
        <View style={styles.View_408_43}>
          <Text style={styles.Text_408_43}>Plan</Text>
        </View>
        <View style={styles.View_408_44}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53c4/cdc4/4dc7aed64b81ceea01c6fc31f215021d"
            }}
            style={styles.ImageBackground_I408_44_0_653}
          />
        </View>
      </View>
      <View style={styles.View_408_48}>
        <View style={styles.View_408_49}>
          <Text style={styles.Text_408_49}>Notas</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2769/5dec/b970785067c7abd336c44afaf4c9bd8e"
          }}
          style={styles.ImageBackground_408_52}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_369_700: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_27: {
    width: wp("25%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_28: {
    width: wp("7.487922705314009%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.964383774909422%"),
    top: hp("50%")
  },
  Text_408_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_408_24: {
    width: wp("4.830917874396135%"),
    height: hp("29.6875%"),
    top: hp("18.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.084541062801932%")
  },
  View_408_35: {
    width: wp("25%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_408_36: {
    width: wp("14.009661835748794%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.582741262832123%"),
    top: hp("50%")
  },
  Text_408_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_408_37: {
    width: wp("5.555555555555555%"),
    height: hp("35.9375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.809794402928738%"),
    top: hp("14.0625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_37_0_109: {
    flexGrow: 1,
    width: wp("4.629629936771116%"),
    height: hp("29.94791865348816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.462953134435395%"),
    top: hp("2.9949188232421875%")
  },
  View_408_42: {
    width: wp("25%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_43: {
    width: wp("6.038647342995169%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.689021456068843%"),
    top: hp("50%")
  },
  Text_408_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_408_44: {
    width: wp("5.555555555555555%"),
    height: hp("35.9375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("18.75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_44_0_653: {
    flexGrow: 1,
    width: wp("4.048611000540176%"),
    height: hp("26.189452409744263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("4.4921875%")
  },
  View_408_48: {
    width: wp("25%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(19, 21, 38, 1)"
  },
  View_408_49: {
    width: wp("8.212560386473431%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.481291987469806%"),
    top: hp("50%")
  },
  Text_408_49: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_408_52: {
    width: wp("4.5893719806763285%"),
    height: hp("29.6875%"),
    top: hp("18.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.38647342995169%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
