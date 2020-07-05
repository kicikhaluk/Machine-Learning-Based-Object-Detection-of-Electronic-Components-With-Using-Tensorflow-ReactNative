import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarBtn from './TabBarBtn';
import { Camera, Home, RotateCcw } from '../icons';
import Colors from '../../constants/Colors';


const TabBar = ({ state, navigation }) => {

  return (

    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          label === 'Solver' ? (
            <View style={styles.cameraBtnBg} key={label}>
              <TabBarBtn
                onPress={onPress}
                style={styles.cameraBtn}
              >
                <Camera stroke={Colors.primary} />
              </TabBarBtn>
            </View>
          ) : (
              <TabBarBtn
                onPress={onPress}
                key={label}
                style={{ flex: 1, height: 56, paddingTop: 6 }}
              >
                {label === 'Info' && <Home stroke={Colors.primary} />}
                {label === 'History' && <RotateCcw stroke={Colors.primary} />}
                <View
                  style={{ ...styles.bottomPointer, backgroundColor: isFocused ? Colors.primary : Colors.secondary }}
                >
                </View>
              </TabBarBtn>
            )
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  cameraBtnBg: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 999,
    marginTop: -15
  },
  cameraBtn: {
    height: 56,
    width: 56,
    borderRadius: 56,
    backgroundColor: Colors.secondary
  },
  btn: {},
  bottomPointer: {
    height: 4,
    width: 4,
    borderRadius: 4,
    marginTop: 6
  }
});
export default TabBar;