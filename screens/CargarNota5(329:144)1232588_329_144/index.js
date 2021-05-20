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
      <View style={styles.View_329_151}>
        <Text style={styles.Text_329_151}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus,
          lacus quis porttitor ultricies, tellus odio suscipit ante, ut auctor
          odio purus a velit. Donec sit amet tempor lorem, eget suscipit quam.
          Proin fermentum nec sem non ullamcorper. Praesent vel dui non purus
          porttitor interdum.{" "}
        </Text>
      </View>
      <View style={styles.View_329_152}>
        <Text style={styles.Text_329_152}>Título de la nota</Text>
      </View>
      <View style={styles.View_329_172}>
        <Text style={styles.Text_329_172}>Selecciona PGI</Text>
      </View>
      <View style={styles.View_329_173}>
        <Text style={styles.Text_329_173}>Etiquetas</Text>
      </View>
      <View style={styles.View_329_174}>
        <Text style={styles.Text_329_174}>Sucursal</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("321_2666"))
        }
      >
        <View style={styles.View_329_175}>
          <Text style={styles.Text_329_175}>Avellaneda</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_329_176}>
        <View style={styles.View_329_177} />
        <View style={styles.View_329_179}>
          <Text style={styles.Text_329_179}>Nueva Nota</Text>
        </View>
        <View style={styles.View_329_180}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2a8/f213/1b81b7ce02513a5e8834679018baf692"
            }}
            style={styles.ImageBackground_I329_180_0_2421}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7210/6bf9/3fda91f5f14c8548a9ac383f022801c0"
          }}
          style={styles.ImageBackground_329_181}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/7587/da5fd9f9a71552b036f438ea3a13805b"
        }}
        style={styles.ImageBackground_329_182}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/7587/da5fd9f9a71552b036f438ea3a13805b"
        }}
        style={styles.ImageBackground_329_183}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/7587/da5fd9f9a71552b036f438ea3a13805b"
        }}
        style={styles.ImageBackground_329_184}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/863c/2612/b0926be15df41750e6e6b05a270af0d7"
        }}
        style={styles.ImageBackground_329_185}
      />
      <View style={styles.View_329_186}>
        <View style={styles.View_329_187} />
        <View style={styles.View_329_188} />
        <View style={styles.View_329_189} />
        <View style={styles.View_329_190}>
          <Text style={styles.Text_329_190}>Oportunidad</Text>
        </View>
      </View>
      <View style={styles.View_329_191}>
        <View style={styles.View_329_192} />
        <View style={styles.View_329_193} />
        <View style={styles.View_329_194} />
        <View style={styles.View_329_195}>
          <Text style={styles.Text_329_195}>Debilidad</Text>
        </View>
      </View>
      <View style={styles.View_329_196}>
        <View style={styles.View_329_197} />
        <View style={styles.View_329_198} />
        <View style={styles.View_329_199} />
        <View style={styles.View_329_200}>
          <Text style={styles.Text_329_200}>Fortaleza</Text>
        </View>
      </View>
      <View style={styles.View_329_201} />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("329_1610"))
        }
      >
        <View style={styles.View_329_202}>
          <View style={styles.View_329_203} />
          <View style={styles.View_329_204} />
          <View style={styles.View_329_205}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3ad/5ab1/4d0191377a1bbee279bc95182a305226"
              }}
              style={styles.ImageBackground_329_206}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_369_791}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e90b/ddf3/5f6933211dec0f21b501bd687bd956f6"
          }}
          style={styles.ImageBackground_369_792}
        />
        <View style={styles.View_369_794}>
          <Text style={styles.Text_369_794}>1</Text>
        </View>
      </View>
      <View style={styles.View_369_795}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7c5/2e06/04f017c3384c917f5d13e222ddca3492"
          }}
          style={styles.ImageBackground_369_796}
        />
        <View style={styles.View_369_797}>
          <Text style={styles.Text_369_797}>2</Text>
        </View>
      </View>
      <View style={styles.View_369_798}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c505/e09e/c1ee8cf8021cc16bd0ee33af48108779"
          }}
          style={styles.ImageBackground_369_799}
        />
        <View style={styles.View_369_800}>
          <Text style={styles.Text_369_800}>3</Text>
        </View>
      </View>
      <View style={styles.View_369_801}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3bc/14c5/329bf8ba1ab50850a98f118d4b7a441e"
          }}
          style={styles.ImageBackground_369_802}
        />
        <View style={styles.View_369_803}>
          <Text style={styles.Text_369_803}>4</Text>
        </View>
      </View>
      <View style={styles.View_369_804}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bc0/6820/aebb8bf1b2573f0b2b4965f51c70f0e1"
          }}
          style={styles.ImageBackground_369_805}
        />
        <View style={styles.View_369_806}>
          <Text style={styles.Text_369_806}>5</Text>
        </View>
      </View>
      <View style={styles.View_369_807}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afb4/5397/68a9f9b0f28f497c82a7df94aaa1e1bf"
          }}
          style={styles.ImageBackground_369_808}
        />
        <View style={styles.View_369_809}>
          <Text style={styles.Text_369_809}>6</Text>
        </View>
      </View>
      <View style={styles.View_369_810}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56cd/55c6/e6a9b8c7689a73688c5efd117adc0956"
          }}
          style={styles.ImageBackground_369_811}
        />
        <View style={styles.View_369_812}>
          <Text style={styles.Text_369_812}>7</Text>
        </View>
      </View>
      <View style={styles.View_408_650}>
        <View style={styles.View_408_651} />
        <View style={styles.View_408_652}>
          <View style={styles.View_408_653}>
            <Text style={styles.Text_408_653}>Perfil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e2/066c/854b58b306f571c33a5ce305f20cfd89"
            }}
            style={styles.ImageBackground_408_655}
          />
        </View>
        <View style={styles.View_408_658}>
          <View style={styles.View_408_659}>
            <Text style={styles.Text_408_659}>Monitoreo</Text>
          </View>
          <View style={styles.View_408_660}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f7a/5a45/7ccf5a1bbe312484705b37229addbd74"
              }}
              style={styles.ImageBackground_I408_660_0_109}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("342_1"))
          }
        >
          <View style={styles.View_408_661}>
            <View style={styles.View_408_662}>
              <Text style={styles.Text_408_662}>Plan</Text>
            </View>
            <View style={styles.View_408_663}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53c4/cdc4/4dc7aed64b81ceea01c6fc31f215021d"
                }}
                style={styles.ImageBackground_I408_663_0_653}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_408_664}>
          <View style={styles.View_408_665}>
            <Text style={styles.Text_408_665}>Notas</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2769/5dec/b970785067c7abd336c44afaf4c9bd8e"
            }}
            style={styles.ImageBackground_408_666}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100.5464480874317%") },
  View_329_151: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("46.03825136612022%")
  },
  Text_329_151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_329_152: {
    width: wp("58.93719806763285%"),
    minWidth: wp("58.93719806763285%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("38.3879781420765%")
  },
  Text_329_152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_329_172: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("10.792349726775956%")
  },
  Text_329_172: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_329_173: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("31.284153005464482%")
  },
  Text_329_173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_329_174: {
    width: wp("42.7536231884058%"),
    minWidth: wp("42.7536231884058%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("24.59016393442623%")
  },
  Text_329_174: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_329_175: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.35748792270532%"),
    top: hp("24.59016393442623%")
  },
  Text_329_175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_329_176: {
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
  View_329_177: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_329_179: {
    width: wp("29.951690821256037%"),
    minWidth: wp("29.951690821256037%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    top: hp("2.185792349726776%")
  },
  Text_329_179: {
    color: "rgba(87, 89, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_329_180: {
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
  ImageBackground_I329_180_0_2421: {
    flexGrow: 1,
    width: wp("0.966183574879227%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("0.5464480874316937%")
  },
  ImageBackground_329_181: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%")
  },
  ImageBackground_329_182: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("23.08743169398907%")
  },
  ImageBackground_329_183: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("29.6448087431694%")
  },
  ImageBackground_329_184: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("36.6120218579235%")
  },
  ImageBackground_329_185: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("24.726775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.82125603864735%")
  },
  View_329_186: {
    width: wp("22.22222222222222%"),
    height: hp("3.551912568306011%"),
    top: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.48309178743962%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_329_187: {
    width: wp("22.22222222222222%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_329_188: {
    width: wp("22.22222222222222%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 184, 34, 1)",
    borderWidth: 1
  },
  View_329_189: {
    width: wp("22.22222222222222%"),
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
  View_329_190: {
    flexGrow: 1,
    width: wp("20.28985507246377%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("0.4098360655737707%")
  },
  Text_329_190: {
    color: "rgba(255, 184, 34, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_329_191: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.05314009661835%"),
    top: hp("31.284153005464482%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_329_192: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_329_193: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(244, 81, 108, 1)",
    borderWidth: 1
  },
  View_329_194: {
    width: wp("18.59903381642512%"),
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
  View_329_195: {
    flexGrow: 1,
    width: wp("12.560386473429952%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("0.4098360655737707%")
  },
  Text_329_195: {
    color: "rgba(244, 81, 108, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_329_196: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_329_197: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_329_198: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(52, 191, 163, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_329_199: {
    width: wp("18.59903381642512%"),
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
  View_329_200: {
    flexGrow: 1,
    width: wp("12.560386473429952%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376834%"),
    top: hp("0.4098360655737707%")
  },
  Text_329_200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_329_201: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.08695652173913%"),
    top: hp("30.46448087431694%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  View_329_202: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.43478260869566%"),
    top: hp("80.87431693989072%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_329_203: {
    width: wp("13.526570048309178%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 26, 46, 1)"
  },
  View_329_204: {
    width: wp("13.526570048309178%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.03999999910593033
  },
  View_329_205: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516897%"),
    top: hp("2.0491803278688394%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_329_206: {
    width: wp("5.797101449275362%"),
    height: hp("2.6696106123793975%"),
    top: hp("0.3045420829064227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_791: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_369_792: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_794: {
    width: wp("2.657004830917874%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772937%")
  },
  Text_369_794: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_795: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.115942028985508%"),
    top: hp("15.437158469945356%")
  },
  ImageBackground_369_796: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_797: {
    width: wp("2.657004830917874%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772955%")
  },
  Text_369_797: {
    color: "rgba(87, 89, 98, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_798: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.642512077294686%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_369_799: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_800: {
    width: wp("2.657004830917874%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772955%")
  },
  Text_369_800: {
    color: "rgba(87, 89, 98, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_801: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.169082125603865%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_369_802: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_803: {
    width: wp("2.657004830917874%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077292%")
  },
  Text_369_803: {
    color: "rgba(87, 89, 98, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_804: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.69565217391305%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_369_805: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_806: {
    width: wp("2.657004830917874%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077292%")
  },
  Text_369_806: {
    color: "rgba(87, 89, 98, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_807: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222221%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_369_808: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_809: {
    width: wp("2.657004830917874%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077306%")
  },
  Text_369_809: {
    color: "rgba(87, 89, 98, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_810: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.74879227053141%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_369_811: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_812: {
    width: wp("2.657004830917874%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772777%")
  },
  Text_369_812: {
    color: "rgba(87, 89, 98, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_650: {
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
  View_408_651: {
    width: wp("100%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_652: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_653: {
    width: wp("7.487922705314009%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.964383774909422%"),
    top: hp("4.37158469945355%")
  },
  Text_408_653: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_408_655: {
    width: wp("4.830917874396135%"),
    height: hp("2.5956284153005464%"),
    top: hp("1.639344262295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.084541062801932%")
  },
  View_408_658: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_408_659: {
    width: wp("14.009661835748794%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.582741262832123%"),
    top: hp("4.37158469945355%")
  },
  Text_408_659: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_408_660: {
    width: wp("5.555555555555555%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.809794402928738%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_660_0_109: {
    flexGrow: 1,
    width: wp("4.629629936771116%"),
    height: hp("2.618397259321369%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.462953134435395%"),
    top: hp("0.261850826075829%")
  },
  View_408_661: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_662: {
    width: wp("6.038647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.689021456068843%"),
    top: hp("4.37158469945355%")
  },
  Text_408_662: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_408_663: {
    width: wp("5.555555555555555%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("1.639344262295097%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_663_0_653: {
    flexGrow: 1,
    width: wp("4.048611000540176%"),
    height: hp("2.2897881888300993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("0.392759562841519%")
  },
  View_408_664: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(19, 21, 38, 1)"
  },
  View_408_665: {
    width: wp("8.212560386473431%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.481291987469806%"),
    top: hp("4.37158469945355%")
  },
  Text_408_665: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_408_666: {
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
