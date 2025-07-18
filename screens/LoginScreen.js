import { View, Text, SafeAreaView, TouchableOpacity,Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { themColor } from '../theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


export default function LoginScreen() {
  const navigation=useNavigation()
  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = async() =>{
      if(email && password){
        try{await signInWithEmailAndPassword(auth,email,password);}catch(err){console.log('got error ',err.message)}
      }
    }
  return (
    <View className='flex-1 bg-white' style={{backgroundColor:themColor.bgcolor}}>

<SafeAreaView className='flex'>
   <View className='flex-row justify-start'>
    <TouchableOpacity
    className='bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-12' 
    onPress={()=> navigation.goBack()}
    >

<Icon.ArrowLeft height={20} width={20} color={'black'}/>
    </TouchableOpacity>
   
   </View>
    <View className='flex-row justify-center mb-4'>
      <Image source={require('../assets/images/female.png')}
      style={{width:200, height:200}}
      />
      
    </View>
    
  </SafeAreaView>  
  <View className='flex-1 bg-white px-8 pt-8'
  style={{borderTopLeftRadius:50,borderTopRightRadius:50}}
  >
    <View className='form space-y-2'>
      <Text className='text-gray-700 ml-4'>Email Adress</Text>
      <TextInput 
      className='p-4 bg-gray-100  text-gray-700 rounded-2xl mb-3'
       value={email}
      onChangeText={value=>setEmail(value)}
      />
      <Text className='text-gray-700 ml-4'>Password</Text>
      <TextInput 
      className='p-4 bg-gray-100  text-gray-700 rounded-2xl'
      value={password}
      onChangeText={value=>setPassword(value)}
      />
      <TouchableOpacity className='flex items-end mb-5'>
        <Text className='text-gray-700'>Forget Password</Text>
        
      </TouchableOpacity>
      <TouchableOpacity className='py-3 bg-yellow-400 rounded-xl'
      onPress={handleSubmit}
      >
        <Text className='font-xl font-bold text-center text-gray-700'>Login</Text>
        

      </TouchableOpacity>
    </View>
    <Text className='text-xl text-gray-700 font-bold text-center   py-5'>Or</Text>
    <View className='flex-row justify-center space-x-10 '>
      <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
        <Image source={require('../assets/images/google.png')}
        className='w-10 h-10 '
        />
      </TouchableOpacity>
      <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
        <Image source={require('../assets/images/apple.png')}
        className='w-10 h-10'
        />
      </TouchableOpacity>
      <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
        <Image source={require('../assets/images/facebook.png')}
        className='w-10 h-10'
        />
      </TouchableOpacity>
    </View>
    <View className='flex-row justify-center mt-3'>
            <Text className='text-gray-500 font-semibold'>
              Dont have an account! 
            </Text>
            <TouchableOpacity
            onPress={()=> navigation.navigate('SignUp')}
            >
              <Text className='font-semibold text-yellow-500'>  Sign Up</Text>
            </TouchableOpacity>
          </View>
    </View>   
    </View>
  )
}