import React, { Component } from 'react';
import { ScrollView,AppRegistry,StyleSheet,View,Text,Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


const Festivals =()=>{
    const{Sixpicbg,pic1,textstyle}=styles;

    return(
        <View style={Sixpicbg}>
            <View>
                   <Image source={require('../../src/assets/e.png')} 
                   style={pic1} />
                   <Text style={textstyle}>新年</Text>
                   <Image source={require('../../src/assets/h.png')} 
                   style={pic1} />
                   <Text style={textstyle}>中元節</Text>
                   <Image source={require('../../src/assets/d.png')} 
                   style={pic1} />
                   <Text style={textstyle}>七夕</Text>
            </View>
            <View>    
                   <Image source={require('../../src/assets/a.png')} 
                   style={pic1} />
                   <Text style={textstyle}>清明節</Text>
                   <Image source={require('../../src/assets/g.png')} 
                   style={pic1} />
                   <Text style={textstyle}>端午節</Text>
                   <Image source={require('../../src/assets/c.png')} 
                   style={pic1} />
                   <Text style={textstyle}>中秋節</Text>
            </View>
        </View>
    );
};

const styles = {
    Sixpicbg:{
        flexDirection:'row',
    },
    pic1:{
        width:155,
        height:120,
        marginTop:30,
        marginLeft:25,
    },
     textstyle:{
        color:'rgb(0,0,0)',
        fontSize:15,
        fontWeight: 'bold',
        marginLeft:85,
        marginTop:15,
    },
};

export default Festivals;