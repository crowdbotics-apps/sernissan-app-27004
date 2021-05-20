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
      <View style={styles.View_321_2667} />
      <View style={styles.View_321_2668}>
        <View style={styles.View_321_2669}>
          <View style={styles.View_321_2670} />
        </View>
      </View>
      <View style={styles.View_321_2673}>
        <Text style={styles.Text_321_2673}>Avellaneda</Text>
      </View>
      <View style={styles.View_408_10}>
        <Text style={styles.Text_408_10}>Quilmes</Text>
      </View>
      <View style={styles.View_408_11}>
        <Text style={styles.Text_408_11}>Gerli</Text>
      </View>
      <View style={styles.View_408_5}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5df/3312/d54bac325609e94b883a1ee84c013e10"
          }}
          style={styles.ImageBackground_I408_5_0_499}
        />
      </View>
      <View style={styles.View_408_16}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b05/cdb7/9993243e1180f34fd2c554e478aea973"
          }}
          style={styles.ImageBackground_I408_16_0_512}
        />
      </View>
      <View style={styles.View_408_20}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b05/cdb7/9993243e1180f34fd2c554e478aea973"
          }}
          style={styles.ImageBackground_I408_20_0_512}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_321_2667: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_321_2668: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("46.42856482303504%"),
    minHeight: hp("46.42856482303504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.5714814157197%")
  },
  View_321_2669: {
    width: wp("100%"),
    height: hp("46.42856482303504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_321_2670: {
    width: wp("100%"),
    height: hp("46.42856482303504%"),
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
  View_321_2673: {
    width: wp("150.81967213114754%"),
    minWidth: wp("150.81967213114754%"),
    minHeight: hp("15.151515151515152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.57859860613046%"),
    top: hp("17.424242424242426%")
  },
  Text_321_2673: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_408_10: {
    width: wp("150.81967213114754%"),
    minWidth: wp("150.81967213114754%"),
    minHeight: hp("15.151515151515152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.57859860613046%"),
    top: hp("42.42424242424242%")
  },
  Text_408_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_408_11: {
    width: wp("150.81967213114754%"),
    minWidth: wp("150.81967213114754%"),
    minHeight: hp("15.151515151515152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.57859860613046%"),
    top: hp("67.42424242424242%")
  },
  Text_408_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_408_5: {
    width: wp("13.114754098360656%"),
    minWidth: wp("13.114754098360656%"),
    height: hp("18.181818181818183%"),
    minHeight: hp("18.181818181818183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.114754098360656%"),
    top: hp("15.909090909090908%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_5_0_499: {
    flexGrow: 1,
    width: wp("10.92896174863388%"),
    height: hp("15.151515151515152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0928961748633874%"),
    top: hp("1.5151515151515174%")
  },
  View_408_16: {
    width: wp("13.114754098360656%"),
    minWidth: wp("13.114754098360656%"),
    height: hp("18.181818181818183%"),
    minHeight: hp("18.181818181818183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.114754098360656%"),
    top: hp("40.909090909090914%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_16_0_512: {
    flexGrow: 1,
    width: wp("10.92896174863388%"),
    height: hp("15.151515151515152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0928961748633874%"),
    top: hp("1.5151515151515085%")
  },
  View_408_20: {
    width: wp("13.114754098360656%"),
    minWidth: wp("13.114754098360656%"),
    height: hp("18.181818181818183%"),
    minHeight: hp("18.181818181818183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.114754098360656%"),
    top: hp("65.9090909090909%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_20_0_512: {
    flexGrow: 1,
    width: wp("10.92896174863388%"),
    height: hp("15.151515151515152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0928961748633874%"),
    top: hp("1.5151515151515156%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
