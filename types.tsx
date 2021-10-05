/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      MFNdogoo:undefined;
      RegMFNdogo:undefined;
      RegMFKbw:undefined;
      MyHomeie:undefined;
      RegKFKbw:undefined;
      BuyFltFm:undefined;
      DpstMney:undefined;
      RegUsrScrn:undefined;
      CrtAdmin:undefined;
      SttinsHm:undefined;
      MFAdminstrator:undefined;
      MFAdminstrators:undefined;
      MFKbwa:undefined;
      MFKubwa:undefined;
      MFNdogo:undefined;
      MFNdogos:undefined;
      MFAdvocate:undefined;
      MFAdvocateHome:undefined;
      RegMFNdgScrn:undefined;
      MFAdvocateReg:undefined;
      Home:undefined;
    }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  
};


export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  
 
  MyAc:undefined;
  Loans:undefined;
  CredSales:undefined;
  Chama:undefined;
  Ads:undefined;
  RegMFNdgScrn:undefined;
  
  
  
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type UserReg = {
  usr:String;
}
