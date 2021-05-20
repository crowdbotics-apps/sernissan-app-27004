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
      <View style={styles.View_283_1} />
      <View style={styles.View_283_2}>
        <Text style={styles.Text_283_2}>Buscar</Text>
      </View>
      <View style={styles.View_283_8}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11e1/0481/e565acd9ecffa7769f6312efda41c421"
          }}
          style={styles.ImageBackground_I283_8_0_2484}
        />
      </View>
      <View style={styles.View_283_17}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f899/663f/4291929b1aad3245b9c51e54eadabb77"
          }}
          style={styles.ImageBackground_I283_17_0_111}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("321_2354"))
        }
      >
        <View style={styles.View_302_1863}>
          <View style={styles.View_302_1861}>
            <View style={styles.View_302_1862} />
          </View>
          <View style={styles.View_293_328}>
            <View style={styles.View_I293_328_0_1847}>
              <Text style={styles.Text_I293_328_0_1847}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </Text>
            </View>
            <View style={styles.View_I293_328_0_1848}>
              <Text style={styles.Text_I293_328_0_1848}>Título</Text>
            </View>
          </View>
          <View style={styles.View_301_1887} />
          <View style={styles.View_301_1888}>
            <Text style={styles.Text_301_1888}>PGI 1</Text>
          </View>
          <View style={styles.View_301_1904}>
            <Text style={styles.Text_301_1904}>01/05/2021</Text>
          </View>
          <View style={styles.View_301_1889}>
            <View style={styles.View_301_1890} />
            <View style={styles.View_301_1891} />
            <View style={styles.View_301_1892} />
            <View style={styles.View_301_1893}>
              <Text style={styles.Text_301_1893}>Debilidad</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_303_1904}>
        <View style={styles.View_303_1905}>
          <View style={styles.View_303_1906} />
          <View style={styles.View_301_1894}>
            <View style={styles.View_301_1895} />
            <View style={styles.View_301_1896} />
            <View style={styles.View_301_1897} />
            <View style={styles.View_301_1898}>
              <Text style={styles.Text_301_1898}>Fortaleza</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_303_1907}>
          <View style={styles.View_I303_1907_0_1847}>
            <Text style={styles.Text_I303_1907_0_1847}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </View>
          <View style={styles.View_I303_1907_0_1848}>
            <Text style={styles.Text_I303_1907_0_1848}>Título</Text>
          </View>
        </View>
        <View style={styles.View_303_1908} />
        <View style={styles.View_303_1909}>
          <Text style={styles.Text_303_1909}>PGI 1</Text>
        </View>
        <View style={styles.View_303_1910}>
          <Text style={styles.Text_303_1910}>01/05/2021</Text>
        </View>
      </View>
      <View style={styles.View_309_2007}>
        <View style={styles.View_309_2008}>
          <View style={styles.View_309_2009} />
          <View style={styles.View_309_2010}>
            <View style={styles.View_309_2011} />
            <View style={styles.View_309_2012} />
            <View style={styles.View_309_2013} />
            <View style={styles.View_309_2014}>
              <Text style={styles.Text_309_2014}>Fortaleza</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_309_2015}>
          <View style={styles.View_I309_2015_0_1847}>
            <Text style={styles.Text_I309_2015_0_1847}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </View>
          <View style={styles.View_I309_2015_0_1848}>
            <Text style={styles.Text_I309_2015_0_1848}>Título</Text>
          </View>
        </View>
        <View style={styles.View_309_2016} />
        <View style={styles.View_309_2017}>
          <Text style={styles.Text_309_2017}>PGI 1</Text>
        </View>
        <View style={styles.View_309_2018}>
          <Text style={styles.Text_309_2018}>01/05/2021</Text>
        </View>
      </View>
      <View style={styles.View_309_2037}>
        <View style={styles.View_309_2038}>
          <View style={styles.View_309_2039} />
          <View style={styles.View_309_2040}>
            <View style={styles.View_309_2041} />
            <View style={styles.View_309_2042} />
            <View style={styles.View_309_2043} />
            <View style={styles.View_309_2044}>
              <Text style={styles.Text_309_2044}>Fortaleza</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_309_2045}>
          <View style={styles.View_I309_2045_0_1847}>
            <Text style={styles.Text_I309_2045_0_1847}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </View>
          <View style={styles.View_I309_2045_0_1848}>
            <Text style={styles.Text_I309_2045_0_1848}>Título</Text>
          </View>
        </View>
        <View style={styles.View_309_2046} />
        <View style={styles.View_309_2047}>
          <Text style={styles.Text_309_2047}>PGI 1</Text>
        </View>
        <View style={styles.View_309_2048}>
          <Text style={styles.Text_309_2048}>01/05/2021</Text>
        </View>
      </View>
      <View style={styles.View_309_2022}>
        <View style={styles.View_309_2023}>
          <View style={styles.View_309_2024} />
          <View style={styles.View_309_2025}>
            <View style={styles.View_309_2026} />
            <View style={styles.View_309_2027} />
            <View style={styles.View_309_2028} />
            <View style={styles.View_309_2029}>
              <Text style={styles.Text_309_2029}>Fortaleza</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_309_2030}>
          <View style={styles.View_I309_2030_0_1847}>
            <Text style={styles.Text_I309_2030_0_1847}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </View>
          <View style={styles.View_I309_2030_0_1848}>
            <Text style={styles.Text_I309_2030_0_1848}>Título</Text>
          </View>
        </View>
        <View style={styles.View_309_2031} />
        <View style={styles.View_309_2032}>
          <Text style={styles.Text_309_2032}>PGI 1</Text>
        </View>
        <View style={styles.View_309_2033}>
          <Text style={styles.Text_309_2033}>01/05/2021</Text>
        </View>
      </View>
      <View style={styles.View_303_1859}>
        <View style={styles.View_303_1860}>
          <View style={styles.View_303_1861} />
        </View>
        <View style={styles.View_303_1862}>
          <View style={styles.View_I303_1862_0_1847}>
            <Text style={styles.Text_I303_1862_0_1847}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </View>
          <View style={styles.View_I303_1862_0_1848}>
            <Text style={styles.Text_I303_1862_0_1848}>Título</Text>
          </View>
        </View>
        <View style={styles.View_303_1863} />
        <View style={styles.View_303_1864}>
          <Text style={styles.Text_303_1864}>PGI 1</Text>
        </View>
        <View style={styles.View_303_1865}>
          <Text style={styles.Text_303_1865}>01/05/2021</Text>
        </View>
        <View style={styles.View_301_1899}>
          <View style={styles.View_301_1900} />
          <View style={styles.View_301_1901} />
          <View style={styles.View_301_1902} />
          <View style={styles.View_301_1903}>
            <Text style={styles.Text_301_1903}>Oportunidad</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_303_1916}>
        <View style={styles.View_303_1917}>
          <View style={styles.View_303_1918} />
          <View style={styles.View_303_1934}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0630/3c07/8c4ea7b407c8e506f5adbc805563e150"
              }}
              style={styles.ImageBackground_I303_1934_0_109}
            />
          </View>
          <View style={styles.View_309_1872}>
            <View style={styles.View_309_1873}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6675/9a08/3c39c267ba7306c90d9f17d98d88d91a"
                }}
                style={styles.ImageBackground_309_1874}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_303_1919}>
          <View style={styles.View_I303_1919_0_1847}>
            <Text style={styles.Text_I303_1919_0_1847}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </View>
        </View>
        <View style={styles.View_303_1920} />
        <View style={styles.View_303_1921}>
          <Text style={styles.Text_303_1921}>PGI 2</Text>
        </View>
        <View style={styles.View_303_1922}>
          <Text style={styles.Text_303_1922}>01/05/2021</Text>
        </View>
        <View style={styles.View_303_1923}>
          <View style={styles.View_303_1924} />
          <View style={styles.View_303_1925} />
          <View style={styles.View_303_1926} />
          <View style={styles.View_303_1927}>
            <Text style={styles.Text_303_1927}>Oportunidad</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_309_2052} />
      <View style={styles.View_408_708}>
        <View style={styles.View_408_709} />
        <View style={styles.View_408_710}>
          <View style={styles.View_408_711}>
            <Text style={styles.Text_408_711}>Perfil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e2/066c/854b58b306f571c33a5ce305f20cfd89"
            }}
            style={styles.ImageBackground_408_713}
          />
        </View>
        <View style={styles.View_408_716}>
          <View style={styles.View_408_717}>
            <Text style={styles.Text_408_717}>Monitoreo</Text>
          </View>
          <View style={styles.View_408_718}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f7a/5a45/7ccf5a1bbe312484705b37229addbd74"
              }}
              style={styles.ImageBackground_I408_718_0_109}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("342_1"))
          }
        >
          <View style={styles.View_408_719}>
            <View style={styles.View_408_720}>
              <Text style={styles.Text_408_720}>Plan</Text>
            </View>
            <View style={styles.View_408_721}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53c4/cdc4/4dc7aed64b81ceea01c6fc31f215021d"
                }}
                style={styles.ImageBackground_I408_721_0_653}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_408_722}>
          <View style={styles.View_408_723}>
            <Text style={styles.Text_408_723}>Notas</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2769/5dec/b970785067c7abd336c44afaf4c9bd8e"
            }}
            style={styles.ImageBackground_408_724}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("277_4"))
        }
      >
        <View style={styles.View_283_204}>
          <View style={styles.View_I283_204_0_542} />
          <View style={styles.View_I283_204_0_543} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58a/b4e9/6e527ed4062c6a879686b0f3837c9dfb"
            }}
            style={styles.ImageBackground_I283_204_0_541}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100.5464480874317%") },
  View_283_1: {
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
  View_283_2: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    top: hp("4.098360655737705%")
  },
  Text_283_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_8: {
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
  ImageBackground_I283_8_0_2484: {
    flexGrow: 1,
    width: wp("4.3478260869565215%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("0.819672131147541%")
  },
  View_283_17: {
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
  ImageBackground_I283_17_0_111: {
    flexGrow: 1,
    width: wp("4.224637625873952%"),
    height: hp("2.3893442310270716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("0.4098360655737703%")
  },
  View_302_1863: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("29.918032786885245%"),
    minHeight: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("7.650273224043716%")
  },
  View_302_1861: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_302_1862: {
    width: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
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
  View_293_328: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I293_328_0_1847: {
    flexGrow: 1,
    width: wp("35.748792270531396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("8.743169398907103%")
  },
  Text_I293_328_0_1847: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I293_328_0_1848: {
    flexGrow: 1,
    width: wp("12.80193236714976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("4.234972677595628%")
  },
  Text_I293_328_0_1848: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_301_1887: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.371584699453557%"),
    backgroundColor: "rgba(75, 11, 114, 1)"
  },
  View_301_1888: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("26.229508196721312%")
  },
  Text_301_1888: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_301_1904: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.086956521739125%"),
    top: hp("26.229508196721312%")
  },
  Text_301_1904: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_301_1889: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("20.76502732240437%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_1890: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_1891: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 81, 108, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_301_1892: {
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
  View_301_1893: {
    flexGrow: 1,
    width: wp("12.560386473429952%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("0.4098360655737707%")
  },
  Text_301_1893: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_303_1904: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("29.918032786885245%"),
    minHeight: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("36.0655737704918%")
  },
  View_303_1905: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_1906: {
    width: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
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
  View_301_1894: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("18.032786885245905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_1895: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_1896: {
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
  View_301_1897: {
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
  View_301_1898: {
    flexGrow: 1,
    width: wp("12.560386473429952%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("0.4098360655737707%")
  },
  Text_301_1898: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_303_1907: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I303_1907_0_1847: {
    flexGrow: 1,
    width: wp("35.748792270531396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("8.743169398907106%")
  },
  Text_I303_1907_0_1847: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I303_1907_0_1848: {
    flexGrow: 1,
    width: wp("12.80193236714976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("4.2349726775956285%")
  },
  Text_I303_1907_0_1848: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_303_1908: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.371584699453557%"),
    backgroundColor: "rgba(75, 11, 114, 1)"
  },
  View_303_1909: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("26.229508196721312%")
  },
  Text_303_1909: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_303_1910: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.086956521739125%"),
    top: hp("26.229508196721312%")
  },
  Text_303_1910: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_309_2007: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("29.918032786885245%"),
    minHeight: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("64.61748633879782%")
  },
  View_309_2008: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_309_2009: {
    width: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
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
  View_309_2010: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("18.032786885245898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_309_2011: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_309_2012: {
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
  View_309_2013: {
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
  View_309_2014: {
    flexGrow: 1,
    width: wp("12.560386473429952%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("0.4098360655737707%")
  },
  Text_309_2014: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_309_2015: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I309_2015_0_1847: {
    flexGrow: 1,
    width: wp("35.748792270531396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("8.7431693989071%")
  },
  Text_I309_2015_0_1847: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I309_2015_0_1848: {
    flexGrow: 1,
    width: wp("12.80193236714976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("4.234972677595621%")
  },
  Text_I309_2015_0_1848: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_309_2016: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.37158469945355%"),
    backgroundColor: "rgba(75, 11, 114, 1)"
  },
  View_309_2017: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("26.229508196721298%")
  },
  Text_309_2017: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_309_2018: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.086956521739125%"),
    top: hp("26.229508196721298%")
  },
  Text_309_2018: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_309_2037: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("29.918032786885245%"),
    minHeight: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("93.16939890710383%")
  },
  View_309_2038: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_309_2039: {
    width: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
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
  View_309_2040: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("18.032786885245912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_309_2041: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_309_2042: {
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
  View_309_2043: {
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
  View_309_2044: {
    flexGrow: 1,
    width: wp("12.560386473429952%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("0.4098360655737565%")
  },
  Text_309_2044: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_309_2045: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I309_2045_0_1847: {
    flexGrow: 1,
    width: wp("35.748792270531396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("8.7431693989071%")
  },
  Text_I309_2045_0_1847: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I309_2045_0_1848: {
    flexGrow: 1,
    width: wp("12.80193236714976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("4.234972677595636%")
  },
  Text_I309_2045_0_1848: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_309_2046: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.371584699453564%"),
    backgroundColor: "rgba(75, 11, 114, 1)"
  },
  View_309_2047: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("26.229508196721326%")
  },
  Text_309_2047: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_309_2048: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.086956521739125%"),
    top: hp("26.229508196721326%")
  },
  Text_309_2048: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_309_2022: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("29.918032786885245%"),
    minHeight: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.690821256038646%"),
    top: hp("64.61748633879782%")
  },
  View_309_2023: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_309_2024: {
    width: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
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
  View_309_2025: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("18.032786885245898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_309_2026: {
    width: wp("18.59903381642512%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_309_2027: {
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
  View_309_2028: {
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
  View_309_2029: {
    flexGrow: 1,
    width: wp("12.560386473429952%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("0.4098360655737707%")
  },
  Text_309_2029: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_309_2030: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I309_2030_0_1847: {
    flexGrow: 1,
    width: wp("35.748792270531396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    top: hp("8.7431693989071%")
  },
  Text_I309_2030_0_1847: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I309_2030_0_1848: {
    flexGrow: 1,
    width: wp("12.80193236714976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    top: hp("4.234972677595621%")
  },
  Text_I309_2030_0_1848: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_309_2031: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.37158469945355%"),
    backgroundColor: "rgba(75, 11, 114, 1)"
  },
  View_309_2032: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    top: hp("26.229508196721298%")
  },
  Text_309_2032: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_309_2033: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.08695652173914%"),
    top: hp("26.229508196721298%")
  },
  Text_309_2033: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_303_1859: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("29.918032786885245%"),
    minHeight: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.690821256038646%"),
    top: hp("7.650273224043716%")
  },
  View_303_1860: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_1861: {
    width: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
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
  View_303_1862: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I303_1862_0_1847: {
    flexGrow: 1,
    width: wp("35.748792270531396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    top: hp("8.743169398907103%")
  },
  Text_I303_1862_0_1847: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I303_1862_0_1848: {
    flexGrow: 1,
    width: wp("12.80193236714976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    top: hp("4.234972677595628%")
  },
  Text_I303_1862_0_1848: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_303_1863: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.371584699453557%"),
    backgroundColor: "rgba(75, 11, 114, 1)"
  },
  View_303_1864: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    top: hp("26.229508196721312%")
  },
  Text_303_1864: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_303_1865: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.08695652173914%"),
    top: hp("26.229508196721312%")
  },
  Text_303_1865: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_301_1899: {
    width: wp("22.22222222222222%"),
    height: hp("3.551912568306011%"),
    top: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_1900: {
    width: wp("22.22222222222222%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_1901: {
    width: wp("22.22222222222222%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 184, 34, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_301_1902: {
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
  View_301_1903: {
    flexGrow: 1,
    width: wp("20.28985507246377%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("0.4098360655737707%")
  },
  Text_301_1903: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_303_1916: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("34.01639344262295%"),
    minHeight: hp("34.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.690821256038646%"),
    top: hp("31.967213114754102%")
  },
  View_303_1917: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_1918: {
    width: wp("43.71980676328502%"),
    height: hp("27.18579234972678%"),
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
  View_303_1934: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.748792270531396%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I303_1934_0_109: {
    flexGrow: 1,
    width: wp("3.2206120698348335%"),
    height: hp("1.8214937116278977%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32205996306046814%"),
    top: hp("0.18215492123463406%")
  },
  View_309_1872: {
    width: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    top: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.714975845410635%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_309_1873: {
    width: wp("1.816165274468021%"),
    height: hp("1.0928989108142957%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.058101340768416776%")
  },
  ImageBackground_309_1874: {
    width: wp("1.816165274468021%"),
    height: hp("1.0928989108142957%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_303_1919: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I303_1919_0_1847: {
    flexGrow: 1,
    width: wp("35.748792270531396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    top: hp("8.7431693989071%")
  },
  Text_I303_1919_0_1847: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_303_1920: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.46994535519126%"),
    backgroundColor: "rgba(248, 217, 48, 1)"
  },
  View_303_1921: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    top: hp("30.327868852459012%")
  },
  Text_303_1921: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_303_1922: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53140096618357%"),
    top: hp("30.327868852459012%")
  },
  Text_303_1922: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_303_1923: {
    width: wp("22.22222222222222%"),
    height: hp("3.551912568306011%"),
    top: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_1924: {
    width: wp("22.22222222222222%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_303_1925: {
    width: wp("22.22222222222222%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 184, 34, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_303_1926: {
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
  View_303_1927: {
    flexGrow: 1,
    width: wp("20.28985507246377%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("0.4098360655737636%")
  },
  Text_303_1927: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_309_2052: {
    width: wp("44.44444444444444%"),
    minWidth: wp("44.44444444444444%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("123.22404371584699%"),
    backgroundColor: "rgba(242, 243, 248, 1)"
  },
  View_408_708: {
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
  View_408_709: {
    width: wp("100%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_710: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_711: {
    width: wp("7.487922705314009%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.964372717815891%"),
    top: hp("4.37158469945355%")
  },
  Text_408_711: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_408_713: {
    width: wp("4.830917874396135%"),
    height: hp("2.5956284153005464%"),
    top: hp("1.639344262295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.084541062801932%")
  },
  View_408_716: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_408_717: {
    width: wp("14.009661835748794%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.582729284314134%"),
    top: hp("4.37158469945355%")
  },
  Text_408_717: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_408_718: {
    width: wp("5.555555555555555%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.809794402928738%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_718_0_109: {
    flexGrow: 1,
    width: wp("4.629629936771116%"),
    height: hp("2.618397259321369%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4629632701044599%"),
    top: hp("0.26183414980361874%")
  },
  View_408_719: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(41, 43, 58, 1)"
  },
  View_408_720: {
    width: wp("6.038647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.689009477550862%"),
    top: hp("4.37158469945355%")
  },
  Text_408_720: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_408_721: {
    width: wp("5.555555555555555%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("1.639344262295097%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_721_0_653: {
    flexGrow: 1,
    width: wp("4.048611000540176%"),
    height: hp("2.2897881888300993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("0.392759562841519%")
  },
  View_408_722: {
    width: wp("25%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(19, 21, 38, 1)"
  },
  View_408_723: {
    width: wp("8.212560386473431%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.481280930376284%"),
    top: hp("4.37158469945355%")
  },
  Text_408_723: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_408_724: {
    width: wp("4.5893719806763285%"),
    height: hp("2.5956284153005464%"),
    top: hp("1.639344262295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.38647342995169%")
  },
  View_283_204: {
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
  View_I283_204_0_542: {
    flexGrow: 1,
    width: wp("13.526570048309178%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 26, 46, 1)"
  },
  View_I283_204_0_543: {
    flexGrow: 1,
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
  ImageBackground_I283_204_0_541: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516897%"),
    top: hp("2.1857923497267677%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
