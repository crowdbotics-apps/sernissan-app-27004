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
      <View style={styles.View_342_2} />
      <View style={styles.View_342_3}>
        <Text style={styles.Text_342_3}>Buscar</Text>
      </View>
      <View style={styles.View_342_4}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11e1/0481/e565acd9ecffa7769f6312efda41c421"
          }}
          style={styles.ImageBackground_I342_4_0_2484}
        />
      </View>
      <View style={styles.View_342_5}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f899/663f/4291929b1aad3245b9c51e54eadabb77"
          }}
          style={styles.ImageBackground_I342_5_0_111}
        />
      </View>
      <View style={styles.View_342_154} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54b6/41d3/3a5dc23d8380acf5d9ca585d99048158"
        }}
        style={styles.ImageBackground_342_164}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54b6/41d3/3a5dc23d8380acf5d9ca585d99048158"
        }}
        style={styles.ImageBackground_342_165}
      />
      <View style={styles.View_342_169}>
        <Text style={styles.Text_342_169}>Si</Text>
      </View>
      <View style={styles.View_342_170}>
        <Text style={styles.Text_342_170}>Parcial</Text>
      </View>
      <View style={styles.View_342_171}>
        <Text style={styles.Text_342_171}>No</Text>
      </View>
      <View style={styles.View_342_166}>
        <Text style={styles.Text_342_166}>25%</Text>
      </View>
      <View style={styles.View_342_167}>
        <Text style={styles.Text_342_167}>5%</Text>
      </View>
      <View style={styles.View_342_168}>
        <Text style={styles.Text_342_168}>70%</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("342_318"))
        }
      >
        <View style={styles.View_342_236}>
          <View style={styles.View_342_237} />
          <View style={styles.View_374_3} />
          <View style={styles.View_342_396}>
            <View style={styles.View_342_397} />
            <View style={styles.View_342_398} />
            <View style={styles.View_342_399} />
            <View style={styles.View_342_400}>
              <Text style={styles.Text_342_400}>Esencial</Text>
            </View>
          </View>
          <View style={styles.View_342_244} />
          <View style={styles.View_342_238}>
            <Text style={styles.Text_342_238}>
              Tenga disponible personas para todas las funciones clave del Mapa
              de Competencias SERNISSAN.
            </Text>
          </View>
          <View style={styles.View_342_239}>
            <Text style={styles.Text_342_239}>Nº 1 | área</Text>
          </View>
          <View style={styles.View_342_241}>
            <Text style={styles.Text_342_241}>PGI 1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bd9/3f36/d5fa8ae78ef884ed05120c3e572dd8f5"
            }}
            style={styles.ImageBackground_342_242}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("342_318"))
        }
      >
        <View style={styles.View_350_2555}>
          <View style={styles.View_350_2556} />
          <View style={styles.View_350_2562} />
          <View style={styles.View_367_3007} />
          <View style={styles.View_350_2563}>
            <Text style={styles.Text_350_2563}>
              Aplique un proceso de integración y desarrollo para nuevos
              colaboradores antes de que ...
            </Text>
          </View>
          <View style={styles.View_350_2564}>
            <Text style={styles.Text_350_2564}>Nº 3 | área</Text>
          </View>
          <View style={styles.View_350_2566}>
            <Text style={styles.Text_350_2566}>PGI 1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bd9/3f36/d5fa8ae78ef884ed05120c3e572dd8f5"
            }}
            style={styles.ImageBackground_350_2567}
          />
          <View style={styles.View_365_1}>
            <View style={styles.View_365_2} />
            <View style={styles.View_365_3} />
            <View style={styles.View_365_4} />
            <View style={styles.View_365_5}>
              <Text style={styles.Text_365_5}>✓ </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("342_318"))
        }
      >
        <View style={styles.View_350_2569}>
          <View style={styles.View_350_2570} />
          <View style={styles.View_374_1} />
          <View style={styles.View_350_2571} />
          <View style={styles.View_350_2572}>
            <Text style={styles.Text_350_2572}>
              Planifique y realice reuniones quincenales con los equipos de
              Venta, Posventa y áreas ...
            </Text>
          </View>
          <View style={styles.View_350_2573}>
            <Text style={styles.Text_350_2573}>Nº 6 | área</Text>
          </View>
          <View style={styles.View_350_2575}>
            <Text style={styles.Text_350_2575}>PGI 1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bd9/3f36/d5fa8ae78ef884ed05120c3e572dd8f5"
            }}
            style={styles.ImageBackground_350_2576}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_350_2578}>
        <View style={styles.View_350_2579} />
        <View style={styles.View_350_2580} />
        <View style={styles.View_365_19} />
        <View style={styles.View_350_2581}>
          <Text style={styles.Text_350_2581}>
            Cuente con un sitio WEB exclusivo Nissan actualizado y alineado a
            los requerimientos de Nissan.
          </Text>
        </View>
        <View style={styles.View_350_2582}>
          <Text style={styles.Text_350_2582}>Nº 23 | área</Text>
        </View>
        <View style={styles.View_350_2584}>
          <Text style={styles.Text_350_2584}>PGI 2</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bd9/3f36/d5fa8ae78ef884ed05120c3e572dd8f5"
          }}
          style={styles.ImageBackground_350_2585}
        />
      </View>
      <View style={styles.View_350_2596}>
        <View style={styles.View_350_2597} />
        <View style={styles.View_374_2} />
        <View style={styles.View_350_2605}>
          <View style={styles.View_350_2606} />
          <View style={styles.View_350_2607} />
          <View style={styles.View_350_2608} />
          <View style={styles.View_350_2609}>
            <Text style={styles.Text_350_2609}>Esencial</Text>
          </View>
        </View>
        <View style={styles.View_350_2598} />
        <View style={styles.View_350_2599}>
          <Text style={styles.Text_350_2599}>
            Tenga una persona o central para el tratamiento y registro de leads
            de Nissan y del Concesionario ...
          </Text>
        </View>
        <View style={styles.View_350_2600}>
          <Text style={styles.Text_350_2600}>Nº 29 | área</Text>
        </View>
        <View style={styles.View_350_2602}>
          <Text style={styles.Text_350_2602}>PGI 2</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bd9/3f36/d5fa8ae78ef884ed05120c3e572dd8f5"
          }}
          style={styles.ImageBackground_350_2603}
        />
      </View>
      <View style={styles.View_350_2610} />
      <View style={styles.View_408_415}>
        <View style={styles.View_408_416} />
        <View style={styles.View_408_417}>
          <View style={styles.View_408_418}>
            <Text style={styles.Text_408_418}>Perfil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e2/066c/854b58b306f571c33a5ce305f20cfd89"
            }}
            style={styles.ImageBackground_408_420}
          />
        </View>
        <View style={styles.View_408_423}>
          <View style={styles.View_408_424}>
            <Text style={styles.Text_408_424}>Monitoreo</Text>
          </View>
          <View style={styles.View_408_425}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f7a/5a45/7ccf5a1bbe312484705b37229addbd74"
              }}
              style={styles.ImageBackground_I408_425_0_109}
            />
          </View>
        </View>
        <View style={styles.View_408_426}>
          <View style={styles.View_408_427}>
            <Text style={styles.Text_408_427}>Plan</Text>
          </View>
          <View style={styles.View_408_428}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1991/5d3c/8edb7e6ee72f30e5990ded54f9160f22"
              }}
              style={styles.ImageBackground_I408_428_0_653}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("277_3"))
          }
        >
          <View style={styles.View_408_429}>
            <View style={styles.View_408_430}>
              <Text style={styles.Text_408_430}>Notas</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2769/5dec/b970785067c7abd336c44afaf4c9bd8e"
              }}
              style={styles.ImageBackground_408_431}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100.5464480874317%") },
  View_342_2: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("2.459016393442623%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_342_3: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    top: hp("4.098360655737705%")
  },
  Text_342_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_4: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.61352657004831%"),
    top: hp("3.825136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I342_4_0_2484: {
    flexGrow: 1,
    width: wp("4.3478260869565215%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("0.819672131147541%")
  },
  View_342_5: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("3.825136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I342_5_0_111: {
    flexGrow: 1,
    width: wp("4.224637625873952%"),
    height: hp("2.3893442310270716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("0.4098360655737703%")
  },
  View_342_154: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.25,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_342_164: {
    width: wp("6.956062075246973e-7%"),
    minWidth: wp("6.956062075246973e-7%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.54106280193236%"),
    top: hp("11.748633879781421%")
  },
  ImageBackground_342_165: {
    width: wp("6.956062075246973e-7%"),
    minWidth: wp("6.956062075246973e-7%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.45893627664317%"),
    top: hp("11.748633879781421%")
  },
  View_342_169: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("16.39344262295082%")
  },
  Text_342_169: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_342_170: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.43961352657005%"),
    top: hp("16.39344262295082%")
  },
  Text_342_170: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_342_171: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.35748792270532%"),
    top: hp("16.39344262295082%")
  },
  Text_342_171: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_342_166: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("11.748633879781421%")
  },
  Text_342_166: {
    color: "rgba(52, 191, 163, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_167: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.43961352657005%"),
    top: hp("11.748633879781421%")
  },
  Text_342_167: {
    color: "rgba(255, 184, 34, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_168: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.35748792270532%"),
    top: hp("11.748633879781421%")
  },
  Text_342_168: {
    color: "rgba(244, 81, 108, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_236: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("22.404371584699454%")
  },
  View_342_237: {
    width: wp("90.82125603864735%"),
    height: hp("15.163934426229508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_374_3: {
    width: wp("10.084541062801932%"),
    minWidth: wp("10.084541062801932%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.7367149758454%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 0
  },
  View_342_396: {
    width: wp("20.048309178743963%"),
    height: hp("3.551912568306011%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.71497584541063%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_342_397: {
    width: wp("20.048309178743963%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_342_398: {
    width: wp("15.217391304347828%"),
    height: hp("2.73224043715847%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 184, 34, 1)",
    opacity: 0.5,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_342_399: {
    width: wp("20.048309178743963%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.11999999731779099,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_342_400: {
    flexGrow: 1,
    width: wp("16.183574879227052%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("0.4098360655737707%")
  },
  Text_342_400: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_342_244: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 11, 114, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 2
  },
  View_342_238: {
    width: wp("58.69565217391305%"),
    minWidth: wp("58.69565217391305%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.84057971014493%"),
    top: hp("4.508196721311478%")
  },
  Text_342_238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_342_239: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.59903381642512%"),
    top: hp("1.775956284153004%")
  },
  Text_342_239: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_342_241: {
    width: wp("10.628019323671497%"),
    top: hp("6.420765027322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376807%")
  },
  Text_342_241: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_342_242: {
    width: wp("8.695652173913043%"),
    height: hp("4.918032786885246%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.40096618357488%")
  },
  View_350_2555: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("39.34426229508197%")
  },
  View_350_2556: {
    width: wp("90.82125603864735%"),
    height: hp("15.163934426229508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_350_2562: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 11, 114, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 2
  },
  View_367_3007: {
    width: wp("10.084542905650853%"),
    minWidth: wp("10.084542905650853%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.7367149758454%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 0
  },
  View_350_2563: {
    width: wp("58.69565217391305%"),
    minWidth: wp("58.69565217391305%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.84057971014493%"),
    top: hp("4.508196721311471%")
  },
  Text_350_2563: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_350_2564: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.59903381642512%"),
    top: hp("1.775956284153004%")
  },
  Text_350_2564: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_350_2566: {
    width: wp("10.628019323671497%"),
    top: hp("6.420765027322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376807%")
  },
  Text_350_2566: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_350_2567: {
    width: wp("8.695652173913043%"),
    height: hp("4.918032786885246%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.40096618357488%")
  },
  View_365_1: {
    width: wp("20.048309178743963%"),
    height: hp("3.551912568306011%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.71497584541063%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_365_2: {
    width: wp("20.048309178743963%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_365_3: {
    width: wp("7.822990417480469%"),
    height: hp("2.73224043715847%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(52, 191, 163, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_365_4: {
    width: wp("20.048309178743963%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.11999999731779099,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_365_5: {
    flexGrow: 1,
    width: wp("18.210318007906853%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("0.4098360655737707%")
  },
  Text_365_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_350_2569: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("56.284153005464475%")
  },
  View_350_2570: {
    width: wp("90.82125603864735%"),
    height: hp("15.163934426229508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_374_1: {
    width: wp("10.084541062801932%"),
    minWidth: wp("10.084541062801932%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.7367149758454%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 0
  },
  View_350_2571: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 11, 114, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 2
  },
  View_350_2572: {
    width: wp("58.69565217391305%"),
    minWidth: wp("58.69565217391305%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.84057971014493%"),
    top: hp("4.508196721311478%")
  },
  Text_350_2572: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_350_2573: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.59903381642512%"),
    top: hp("1.7759562841530112%")
  },
  Text_350_2573: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_350_2575: {
    width: wp("10.628019323671497%"),
    top: hp("6.42076502732241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376807%")
  },
  Text_350_2575: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_350_2576: {
    width: wp("8.695652173913043%"),
    height: hp("4.918032786885246%"),
    top: hp("5.191256830601098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.40096618357488%")
  },
  View_350_2578: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("73.224043715847%")
  },
  View_350_2579: {
    width: wp("90.82125603864735%"),
    height: hp("15.163934426229508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_350_2580: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 217, 48, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 2
  },
  View_365_19: {
    width: wp("10.084541062801932%"),
    minWidth: wp("10.084541062801932%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.7367149758454%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 0
  },
  View_350_2581: {
    width: wp("58.69565217391305%"),
    minWidth: wp("58.69565217391305%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.84057971014493%"),
    top: hp("4.508196721311464%")
  },
  Text_350_2581: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_350_2582: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.59903381642512%"),
    top: hp("1.775956284152997%")
  },
  Text_350_2582: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_350_2584: {
    width: wp("10.628019323671497%"),
    top: hp("6.420765027322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376807%")
  },
  Text_350_2584: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_350_2585: {
    width: wp("8.695652173913043%"),
    height: hp("4.918032786885246%"),
    top: hp("5.191256830601077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.40096618357488%")
  },
  View_350_2596: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("90.1639344262295%")
  },
  View_350_2597: {
    width: wp("90.82125603864735%"),
    height: hp("15.163934426229508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_374_2: {
    width: wp("10.084541062801932%"),
    minWidth: wp("10.084541062801932%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.7367149758454%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 0
  },
  View_350_2605: {
    width: wp("20.048309178743963%"),
    height: hp("3.551912568306011%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.16425120772947%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_350_2606: {
    width: wp("20.048309178743963%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_350_2607: {
    width: wp("15.217391304347828%"),
    height: hp("2.73224043715847%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 184, 34, 1)",
    opacity: 0.5,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_350_2608: {
    width: wp("20.048309178743963%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.11999999731779099,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_350_2609: {
    flexGrow: 1,
    width: wp("16.183574879227052%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("0.4098360655737707%")
  },
  Text_350_2609: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_350_2598: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 217, 48, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 2
  },
  View_350_2599: {
    width: wp("58.69565217391305%"),
    minWidth: wp("58.69565217391305%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.84057971014493%"),
    top: hp("4.508196721311478%")
  },
  Text_350_2599: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_350_2600: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.59903381642512%"),
    top: hp("1.7759562841530112%")
  },
  Text_350_2600: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_350_2602: {
    width: wp("10.628019323671497%"),
    top: hp("6.4207650273224175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376807%")
  },
  Text_350_2602: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_350_2603: {
    width: wp("8.695652173913043%"),
    height: hp("4.918032786885246%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46859903381642%")
  },
  View_350_2610: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("106.01092896174865%"),
    backgroundColor: "rgba(242, 243, 248, 1)"
  },
  View_408_415: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91.80327868852459%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_408_416: {
    width: wp("100%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_417: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_418: {
    width: wp("7.487922705314009%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.964372717815891%"),
    top: hp("4.37158469945355%")
  },
  Text_408_418: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_408_420: {
    width: wp("4.830917874396135%"),
    height: hp("2.5956284153005464%"),
    top: hp("1.639344262295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.084541062801932%")
  },
  View_408_423: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_408_424: {
    width: wp("14.009661835748794%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.582729284314134%"),
    top: hp("4.37158469945355%")
  },
  Text_408_424: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_408_425: {
    width: wp("5.555555555555555%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.809794402928738%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_425_0_109: {
    flexGrow: 1,
    width: wp("4.629629936771116%"),
    height: hp("2.618397259321369%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4629632701044599%"),
    top: hp("0.2618174735314227%")
  },
  View_408_426: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(19, 21, 38, 1)"
  },
  View_408_427: {
    width: wp("6.038647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.689009477550862%"),
    top: hp("4.37158469945355%")
  },
  Text_408_427: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_408_428: {
    width: wp("5.555555555555555%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("1.639344262295097%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_428_0_653: {
    flexGrow: 1,
    width: wp("4.048611000540176%"),
    height: hp("2.2897881888300993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("0.392759562841519%")
  },
  View_408_429: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_430: {
    width: wp("8.212560386473431%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.481280930376284%"),
    top: hp("4.37158469945355%")
  },
  Text_408_430: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_408_431: {
    width: wp("4.5893719806763285%"),
    height: hp("2.5956284153005464%"),
    top: hp("1.639344262295097%"),
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
