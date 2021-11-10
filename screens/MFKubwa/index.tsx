import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import styles from './styles';

const KFKubwaScreen = props => {
  const navigation = useNavigation();

  

  const goRegKFNdogoFm = () => {
    navigation.navigate('RegMFNdgScrn');
  };

  

  const UpdtMFKPWss = () => {
    navigation.navigate('UpdtMFKPWs');
  };

  const RegMFKbws = () => {
    navigation.navigate('RegMFKbw');}

    
      const MFKWthdrwss = () => {
        navigation.navigate('MFKWthdrws');
  };

  const VwMFKAcSgnInss = () => {
    navigation.navigate('VwMFKAcSgnIns');}

    const VwMFKWthdrwlsSgnInss = () => {
      navigation.navigate('VwMFKWthdrwlsSgnIns');
    };
    const MFKVwMFNSgnInsss = () => {
      navigation.navigate('MFKVwMFNSgnInss');
    };
  
    

  return (
    <SafeAreaView>
      <View
        
        style={styles.kfkubwaimage}>
        <View style={styles.kfkubwaMainView}>
          <Text style={styles.kfkubwaText}>My MFNdogos</Text>

          <View style={styles.viewForkfkubwaPressables}>
            <Pressable
              onPress={MFKVwMFNSgnInsss}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>View</Text>
            </Pressable>

            <Pressable onPress={goRegKFNdogoFm} style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>Register</Text>
            </Pressable>

            <Pressable
              onPress={VwMFKWthdrwlsSgnInss}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>DeRegister</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.kfkubwaMainView}>
          <Text style={styles.kfkubwaText}>My Account</Text>

          <View style={styles.viewForkfkubwaPressables}>
            <Pressable
              onPress={UpdtMFKPWss}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>UpdateAc</Text>
            </Pressable>

            <Pressable
              onPress={VwMFKAcSgnInss}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>ViewAc</Text>
            </Pressable>

            <Pressable
              onPress={RegMFKbws}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>CreateAc</Text>
            </Pressable>

          </View>
        </View>

        <View style={styles.kfkubwaMainView}>
          <Text style={styles.kfkubwaText}> Earnings</Text>

          <View style={styles.viewForkfkubwaPressables}>
            

            <Pressable onPress={MFKWthdrwss} style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>Withdraw</Text>
            </Pressable>

            <Pressable onPress={VwMFKWthdrwlsSgnInss} style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>My Withdrawals</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KFKubwaScreen;