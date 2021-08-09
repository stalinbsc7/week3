
import React from 'react';
import {  StyleSheet ,Image,View,Text} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import color from '../app/colors/Config';
import{MaterialCommunityIcons} from '@expo/vector-icons';
import Icons from './Icon';

const Listingitems = ({title,subtitle,image, IconComponent}) => {
    const {landscape} = useDeviceOrientation()
   
    return (
        <View style={styles.container}>
            <View style={{marginLeft:'4%'}}>{IconComponent}</View>
            <View>
     <Image  style={styles.image} source={image}/></View>
      
     <View style={ styles.textcontainer}>
     <Text style={[styles.text,{fontWeight:'bold',fontSize:18 ,marginRight:10}]}>{title}</Text>  
     <Text style={[styles.text,{color:'grey'}]}>{subtitle}</Text></View>
         </View>
        

    );
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 0.155,
        backgroundColor:'white',
        width:'100%',
        height:'40%', 
        flexDirection:'row',
        marginTop:'1%',
        //justifyContent:'center',
        //marginLeft:'5%',
        borderColor:'black',
        //marginLeft:'-30%'
        
               },

      image:{
        
          width:100,
          height:100,
          marginLeft:'5%',
          borderRadius:50
           },


           text:{
           // marginTop:25,
            //marginLeft:10
            
            },

            textcontainer:{
                marginTop:"10%",
            }

})

export default Listingitems;



