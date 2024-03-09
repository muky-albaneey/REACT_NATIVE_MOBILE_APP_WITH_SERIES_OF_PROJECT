import { Slot } from 'expo-router'
import { useEffect } from 'react'
import {authenticateAsync} from 'expo-local-authentication';
// import * as LocalAuthentication from 'expo-local-authentication';

export default function BiometricProtector() {

    console.log('you are log in')

    useEffect(()=>{
        const authenticate = async ()=>{
          const res = await authenticateAsync;
          console.log(res)
        }

        authenticate();
    },[]);
  return  <Slot />
}