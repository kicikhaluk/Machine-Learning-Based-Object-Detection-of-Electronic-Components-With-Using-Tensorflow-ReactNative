import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/UI/CustomButton';
import * as solverActions from '../../store/actions/solver';
import Colors from '../../constants/Colors';

const PreviewScreen = props => {

  const [pickedImage, setPickedImage] = useState();
  const [base64Data, setBase64Data] = useState();
  const [isSolving, setIsSolving] = useState(false);

  const dispatch = useDispatch();

  const sendImageToSolver = async () => {
    // let photo = { uri: source.uri }
    let formdata = new FormData();
    formdata.append("file", base64Data);
    // console.log("Inside of SendImageSolver");
    // console.log(base64Data);
    setIsSolving(true);
    await axios({
      method: 'post',
      url: "http://192.168.1.32:5000/img",
      data: formdata
    })
      .then(function (response) {
        console.log(response.data);
        dispatch(solverActions.setCircuitSymbols(response.data));
        setIsSolving(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    props.navigation.navigate('Values');
  };
  const takeImageHandler = async () => {
    const options = {
      title: "Select Circuit",
      quality: 1,
    };
    await ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // let source = { uri: response.uri }
        setPickedImage(response.uri);
        setBase64Data(response.data);
        // let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
      // console.log(pickedImage);
      // console.log(typeof response.data);
    });
  }

  return (
    <ScrollView>
      <View style={styles.previewScreen}>
        <View style={styles.imagePicker}>
          <View style={styles.imagePreview}>
            {!(pickedImage) ? <Text>No Image Picked Yet.</Text>
              : <Image
                style={styles.image}
                source={{ uri: pickedImage }}
              />
            }
          </View>
        </View>
      </View>
      <View style={styles.action}>
        <CustomButton
          title='Take Image'
          onPress={takeImageHandler}
        />
        {isSolving ? <ActivityIndicator size='large' color={Colors.primary} /> :
          <CustomButton
            title="Send to Solver"
            onPress={sendImageToSolver}
          />
        }
      </View>
    </ScrollView>
  )
};

export const screenOptions = {
  headerTitle: 'Circuit Scheme'
}

const styles = StyleSheet.create({
  previewScreen: {
    margin: 20,
    justifyContent: 'center'
  },
  action: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 15
  },
  imagePreview: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default PreviewScreen;