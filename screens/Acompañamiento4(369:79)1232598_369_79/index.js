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
      <View style={styles.View_369_86} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54b6/41d3/3a5dc23d8380acf5d9ca585d99048158"
        }}
        style={styles.ImageBackground_369_87}
      />
      <View style={styles.View_369_88}>
        <Text style={styles.Text_369_88}>Sucursal 1</Text>
      </View>
      <View style={styles.View_369_89}>
        <Text style={styles.Text_369_89}>Sucursal 2</Text>
      </View>
      <View style={styles.View_369_90}>
        <Text style={styles.Text_369_90}>Si</Text>
      </View>
      <View style={styles.View_369_91}>
        <Text style={styles.Text_369_91}>No</Text>
      </View>
      <View style={styles.View_369_92}>
        <View style={styles.View_369_93} />
        <View style={styles.View_369_94}>
          <Text style={styles.Text_369_94}>01/05/2021</Text>
        </View>
        <View style={styles.View_369_95}>
          <Text style={styles.Text_369_95}>
            1- Incorporación de Recepcinista en Sucursal de Ventas Quilmes. 2-
            Incorporación de jefe de taller en Taller de Sevicios Quilmes.
          </Text>
        </View>
        <View style={styles.View_369_96}>
          <Text style={styles.Text_369_96}>Acción</Text>
        </View>
        <View style={styles.View_369_97} />
        <View style={styles.View_369_98}>
          <Text style={styles.Text_369_98}>
            Representante de RRHH/ Gerente General
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("367_3241"))
        }
      >
        <View style={styles.View_369_99} />
      </TouchableOpacity>
      <View style={styles.View_369_100}>
        <Text style={styles.Text_369_100}>
          Tenga disponible personas para todas las
        </Text>
      </View>
      <View style={styles.View_369_101}>
        <View style={styles.View_369_102} />
        <View style={styles.View_369_104}>
          <Text style={styles.Text_369_104}>PGI 1 - Hábito Nº 1</Text>
        </View>
        <View style={styles.View_369_105}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2a8/f213/1b81b7ce02513a5e8834679018baf692"
            }}
            style={styles.ImageBackground_I369_105_0_2421}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("342_1"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7210/6bf9/3fda91f5f14c8548a9ac383f022801c0"
            }}
            style={styles.ImageBackground_369_106}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_369_107} />
      <View style={styles.View_369_108} />
      <View style={styles.View_369_109}>
        <Text style={styles.Text_369_109}>Fecha</Text>
      </View>
      <View style={styles.View_369_110}>
        <Text style={styles.Text_369_110}>11/05/2021</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/7587/da5fd9f9a71552b036f438ea3a13805b"
        }}
        style={styles.ImageBackground_369_111}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/7587/da5fd9f9a71552b036f438ea3a13805b"
        }}
        style={styles.ImageBackground_369_112}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6087/25b6/d02892a9882b21d13131e56f59cdeb3f"
        }}
        style={styles.ImageBackground_369_113}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/863c/2612/b0926be15df41750e6e6b05a270af0d7"
        }}
        style={styles.ImageBackground_369_114}
      />
      <View style={styles.View_369_115}>
        <Text style={styles.Text_369_115}>Observaciones</Text>
      </View>
      <View style={styles.View_369_116}>
        <Text style={styles.Text_369_116}>FOM</Text>
      </View>
      <View style={styles.View_369_117}>
        <Text style={styles.Text_369_117}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </Text>
      </View>
      <View style={styles.View_369_118}>
        <Text style={styles.Text_369_118}>Nombre</Text>
      </View>
      <View style={styles.View_369_119}>
        <Text style={styles.Text_369_119}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={styles.View_369_120} />
      <View style={styles.View_369_121}>
        <Text style={styles.Text_369_121}>Fecha</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("321_2666"))
        }
      >
        <View style={styles.View_369_122}>
          <Text style={styles.Text_369_122}>11/05/2021</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/7587/da5fd9f9a71552b036f438ea3a13805b"
        }}
        style={styles.ImageBackground_369_123}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/7587/da5fd9f9a71552b036f438ea3a13805b"
        }}
        style={styles.ImageBackground_369_124}
      />
      <View style={styles.View_369_125}>
        <Text style={styles.Text_369_125}>DOM</Text>
      </View>
      <View style={styles.View_369_126}>
        <Text style={styles.Text_369_126}>Nombre</Text>
      </View>
      <View style={styles.View_369_127}>
        <Text style={styles.Text_369_127}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={styles.View_369_128} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6087/25b6/d02892a9882b21d13131e56f59cdeb3f"
        }}
        style={styles.ImageBackground_369_129}
      />
      <View style={styles.View_408_826}>
        <View style={styles.View_408_827} />
        <View style={styles.View_408_828}>
          <View style={styles.View_408_829}>
            <Text style={styles.Text_408_829}>Perfil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e2/066c/854b58b306f571c33a5ce305f20cfd89"
            }}
            style={styles.ImageBackground_408_831}
          />
        </View>
        <View style={styles.View_408_834}>
          <View style={styles.View_408_835}>
            <Text style={styles.Text_408_835}>Monitoreo</Text>
          </View>
          <View style={styles.View_408_836}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f7a/5a45/7ccf5a1bbe312484705b37229addbd74"
              }}
              style={styles.ImageBackground_I408_836_0_109}
            />
          </View>
        </View>
        <View style={styles.View_408_837}>
          <View style={styles.View_408_838}>
            <Text style={styles.Text_408_838}>Plan</Text>
          </View>
          <View style={styles.View_408_839}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1991/5d3c/8edb7e6ee72f30e5990ded54f9160f22"
              }}
              style={styles.ImageBackground_I408_839_0_653}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("277_3"))
          }
        >
          <View style={styles.View_408_840}>
            <View style={styles.View_408_841}>
              <Text style={styles.Text_408_841}>Notas</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2769/5dec/b970785067c7abd336c44afaf4c9bd8e"
              }}
              style={styles.ImageBackground_408_842}
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
  View_369_86: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("18.30601092896175%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.25,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_369_87: {
    width: wp("6.956062075246973e-7%"),
    minWidth: wp("6.956062075246973e-7%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("19.672131147540984%")
  },
  View_369_88: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("24.316939890710383%")
  },
  Text_369_88: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_369_89: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.41545893719807%"),
    top: hp("24.316939890710383%")
  },
  Text_369_89: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_369_90: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("19.672131147540984%")
  },
  Text_369_90: {
    color: "rgba(52, 191, 163, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_91: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.41545893719807%"),
    top: hp("19.672131147540984%")
  },
  Text_369_91: {
    color: "rgba(244, 81, 108, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_92: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("31.010928961748636%")
  },
  View_369_93: {
    width: wp("90.82125603864735%"),
    height: hp("21.85792349726776%"),
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
  View_369_94: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.91304347826087%"),
    top: hp("1.366120218579237%")
  },
  Text_369_94: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_369_95: {
    width: wp("83.81642512077295%"),
    minWidth: wp("83.81642512077295%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%"),
    top: hp("5.054644808743166%")
  },
  Text_369_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_369_96: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%"),
    top: hp("1.366120218579237%")
  },
  Text_369_96: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_369_97: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.62295081967213%"),
    backgroundColor: "rgba(227, 227, 227, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_369_98: {
    width: wp("83.81642512077295%"),
    minWidth: wp("83.81642512077295%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%"),
    top: hp("18.442622950819672%")
  },
  Text_369_98: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_369_99: {
    width: wp("90.82125603864735%"),
    height: hp("5.721989094885321%"),
    top: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_369_100: {
    width: wp("70.60526972231658%"),
    minWidth: wp("70.60526972231658%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("11.847891051912567%")
  },
  Text_369_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_369_101: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_369_102: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_369_104: {
    width: wp("51.93236714975845%"),
    minWidth: wp("51.93236714975845%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    top: hp("2.185792349726776%")
  },
  Text_369_104: {
    color: "rgba(87, 89, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_369_105: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("2.185792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I369_105_0_2421: {
    flexGrow: 1,
    width: wp("0.966183574879227%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("0.5464480874316937%")
  },
  ImageBackground_369_106: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%")
  },
  View_369_107: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.41443296338691%"),
    minHeight: hp("13.41443296338691%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.60109289617486%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_369_108: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.74779339566257%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_369_109: {
    width: wp("42.7536231884058%"),
    minWidth: wp("42.7536231884058%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("77.48549831369536%")
  },
  Text_369_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_369_110: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.35748792270532%"),
    top: hp("77.48549831369536%")
  },
  Text_369_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_369_111: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("82.54014312243852%")
  },
  ImageBackground_369_112: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("89.09752017161885%")
  },
  ImageBackground_369_113: {
    width: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    top: hp("77.8688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.54589371980676%")
  },
  ImageBackground_369_114: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("11.610887871413935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.95652173913044%")
  },
  View_369_115: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("57.377049180327866%")
  },
  Text_369_115: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_369_116: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("73.52374967981558%")
  },
  Text_369_116: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_369_117: {
    width: wp("75.36231884057972%"),
    minWidth: wp("75.36231884057972%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("60.65573770491803%")
  },
  Text_369_117: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_369_118: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("84.04287536287568%")
  },
  Text_369_118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_369_119: {
    width: wp("50.48309178743962%"),
    minWidth: wp("50.48309178743962%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("90.87347645577186%")
  },
  Text_369_119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_369_120: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.79697372353142%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_369_121: {
    width: wp("42.7536231884058%"),
    minWidth: wp("42.7536231884058%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("104.5346786415642%")
  },
  Text_369_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_369_122: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.35748792270532%"),
    top: hp("104.5346786415642%")
  },
  Text_369_122: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_369_123: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("109.58932345030739%")
  },
  ImageBackground_369_124: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("116.1467004994877%")
  },
  View_369_125: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("100.57293000768443%")
  },
  Text_369_125: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_369_126: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("111.09205569074454%")
  },
  Text_369_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_369_127: {
    width: wp("50.48309178743962%"),
    minWidth: wp("50.48309178743962%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("117.92265678364072%")
  },
  Text_369_127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_369_128: {
    width: wp("27.536231884057973%"),
    minWidth: wp("27.536231884057973%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("123.1139136142418%"),
    backgroundColor: "rgba(242, 243, 248, 1)"
  },
  ImageBackground_369_129: {
    width: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.54589371980676%")
  },
  View_408_826: {
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
  View_408_827: {
    width: wp("100%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_828: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_829: {
    width: wp("7.487922705314009%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.964383774909422%"),
    top: hp("4.37158469945355%")
  },
  Text_408_829: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_408_831: {
    width: wp("4.830917874396135%"),
    height: hp("2.5956284153005464%"),
    top: hp("1.639344262295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.084541062801932%")
  },
  View_408_834: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_408_835: {
    width: wp("14.009661835748794%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.582741262832123%"),
    top: hp("4.37158469945355%")
  },
  Text_408_835: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_408_836: {
    width: wp("5.555555555555555%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.809794402928738%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_836_0_109: {
    flexGrow: 1,
    width: wp("4.629629936771116%"),
    height: hp("2.618397259321369%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.462953134435395%"),
    top: hp("0.2618174735314227%")
  },
  View_408_837: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(19, 21, 38, 1)"
  },
  View_408_838: {
    width: wp("6.038647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.689021456068843%"),
    top: hp("4.37158469945355%")
  },
  Text_408_838: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_408_839: {
    width: wp("5.555555555555555%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("1.639344262295097%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_839_0_653: {
    flexGrow: 1,
    width: wp("4.048611000540176%"),
    height: hp("2.2897881888300993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("0.392759562841519%")
  },
  View_408_840: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_841: {
    width: wp("8.212560386473431%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.481291987469806%"),
    top: hp("4.37158469945355%")
  },
  Text_408_841: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_408_842: {
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
