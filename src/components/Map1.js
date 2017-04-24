import React, { Component } from 'react';
import { Platform, View, ActivityIndicator,TextInput,Image,Text } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import axios from 'axios';

const MAP_URL = 'https://cloud.culture.tw/frontsite/trans/emapOpenDataAction.do?method=exportEmapJson&typeId=A&classifyId=1.1';

class Map extends Component {

    state = {
        mapLoaded: false,
        region: {
            longitude: 121.500823,
            latitude: 25.036762,
            longitudeDelta: 0.01,
            latitudeDelta: 0.02
        },
        map: [],
        errorMessage: null

    }

    componentWillMount() {
        // axios.get(MAP_URL)
        //     .then((response) => {
        //         this.setState({ map: response.data });
        //     });

        this._getMapAsync();

        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    componentDidMount() {
        this.setState({ mapLoaded: true });
    }

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }

    _getMapAsync = async () => {
        let response = await axios.get(MAP_URL);
        await this.setState({ map: response.data });
    }

    _getLocationAsync = () => {
        Permissions.askAsync(Permissions.LOCATION).then(status => {
            if (status !== 'granted') {
                this.setState({
                    errorMessage: 'Permission to access location was denied',
                });
            }

        });

        Location.getCurrentPositionAsync({}).then(location => {
            this.setState({
                region: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.02
                }
            });
        });
    };

    render() {
        const { viewstyle,s_viewstyle,s_img,input,c_img,t_viewstyle,img,textstyle1,textstyle2,se_viewstyle,se_textstyle1,se_textstyle2 } = styles;
        if (!this.state.mapLoaded) {
            return (
                <View>
                    <View style = {s_viewstyle}>     
                        <TextInput style = {input} placeholder ="Search" placeholderTextColor={'rgb(35,31,33)'} />
                        <Image style = {s_img} source = {require('../Asset/icon_search.png')} />
                        <Image style = {c_img} source = {require('../Asset/btn_more.png')} />
                    </View>
                    
                    <View style = {se_viewstyle}>                       
                        <Text style = {se_textstyle1}>Taiwan Map</Text>
                        <Text style = {se_textstyle2}>Street Map</Text>                       
                    </View>     
                    
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator size="large" />
                    </View>
                    <View style = {t_viewstyle}>
                        <View>
                            <Image style = {img} source = {require('../Asset/btn_map.png')} />
                            <Text style = {textstyle1}>Map</Text>
                        </View>
                        <View>
                            <Image style = {img} source = {require('../Asset/btn_festivals.png')} />
                            <Text style = {textstyle2}>Festivals</Text>
                        </View>
                        <View>
                            <Image style = {img} source = {require('../Asset/btn_culture.png')} />
                            <Text style = {textstyle2}>Culture</Text>
                        </View>
                        <View>
                            <Image style = {img} source = {require('../Asset/btn_activity.png')} />
                            <Text style = {textstyle2}>Activity</Text>
                        </View>
                        <View>
                            <Image style = {img} source = {require('../Asset/btn_mylove.png')} />
                            <Text style = {textstyle2}>My Love</Text>
                        </View>
                    </View>
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <View style = {s_viewstyle}>     
                    <TextInput style = {input} placeholder ="Search" placeholderTextColor={'rgb(35,31,33)'} />
                    <Image style = {s_img} source = {require('../Asset/icon_search.png')} />
                    <Image style = {c_img} source = {require('../Asset/btn_more.png')} />
                </View>
                
                <View style = {se_viewstyle}>                    
                    <Text style = {se_textstyle1}>Taiwan Map</Text>
                    <Text style = {se_textstyle2}>Street Map</Text>
                </View>     
                
                <MapView
                    initialRegion={this.state.region}
                    style={{ flex: 1 }}
                    // mapType='hybrid'
                    // showsTraffic
                    // provider='google'

                    onRegionChangeComplete={this.onRegionChangeComplete}
                >

                    {this.state.map.map(site => (
                        <MapView.Marker
                            coordinate={{ latitude: Number(site.lat), longitude: Number(site.lng) }}
                            key={site.sno}
                            title={`${site.sna} ${site.sbi}/${site.tot}`}
                            description={site.ar}
                        />
                    ))}

                </MapView>
                <View style = {t_viewstyle}>
                    <View>
                        <Image style = {img} source = {require('../Asset/btn_map.png')} />
                        <Text style = {textstyle1}>Map</Text>
                    </View>
                    <View>
                        <Image style = {img} source = {require('../Asset/btn_festivals.png')} />
                        <Text style = {textstyle2}>Festivals</Text>
                    </View>
                    <View>
                        <Image style = {img} source = {require('../Asset/btn_culture.png')} />
                        <Text style = {textstyle2}>Culture</Text>
                    </View>
                    <View>
                        <Image style = {img} source = {require('../Asset/btn_activity.png')} />
                        <Text style = {textstyle2}>Activity</Text>
                    </View>
                    <View>
                        <Image style = {img} source = {require('../Asset/btn_mylove.png')} />
                        <Text style = {textstyle2}>My Love</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = {
    s_viewstyle:{
        width:375,
        height:64,
        backgroundColor:'#F1A64C',
        flexDirection:'row',
    },
    s_img:{
        width:18,
        height:18,
        position:'absolute',
        top:32.5,
        left:17,
    },
    input:{
        width:320,
        height:30,
        backgroundColor:'#B17B3A',
        borderRadius:5,
        top:26.5,
        left:8.5,
        fontSize:15,
        paddingLeft:32,
    },
    c_img:{
        width:33,
        height:33,
        position:'absolute',
        top:25,
        left:333.5,
    },
    t_viewstyle:{
        width:375,
        height:49,
        flex:1,
        flexDirection:'row',
        position:'absolute',
        backgroundColor:'#fff',
        top:618.5,
    },
    img:{
        width:25,
        height:25,
        marginTop:5,
        marginLeft:25,
        marginRight:25,
    },
    textstyle1:{
        color:'#F1A64C',
        width:33.5,
        height:12,
        fontSize:10,
        position:'absolute',
        textAlign:'center',      
        top:35,
        left:20.75,
    },
    textstyle2:{
        color:'rgb(187,187,187)',
        width:46,
        height:12,
        fontSize:10,
        position:'absolute',
        textAlign:'center',
        top:35,
        left:14.5,
    },
    se_viewstyle:{           
        flexDirection:'row',
    },
    se_textstyle1:{
        width:100,
        height:35,
        backgroundColor:'#F1A64C',
        color:'#fff',
        fontSize:11,
        textAlign:'center',
        flexDirection:'row',
        top:15,
        left:79.5,
    },
    se_textstyle2:{
        width:100,
        height:35,
        backgroundColor:'#fff',
        color:'rgb(0,0,0)',
        fontSize:11,
        textAlign:'center',
        flexDirection:'row',
        top:15,
        left:67,
    },
};

export default Map;
