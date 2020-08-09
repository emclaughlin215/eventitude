import React from 'react';
import { View, FlatList, TouchableHighlight, Text, Dimensions, Image, StyleSheet, Alert, Modal } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '@blueprintjs/core';

export interface ISelectedImage {
  path: string;
  width: number;
  height: number;
  mime: string;
}

interface IImageSelectorState {
  editPhotoMode: boolean;
}

interface IImageProps {
  image: string;
  size: string;
  shape: string;
  callbackSetImage: (selectedImage: ISelectedImage) => void;
}

export class ImageSelector extends React.Component<IImageProps, IImageSelectorState> {
  constructor(props: IImageProps) {
    super(props);
    this.state = {
      editPhotoMode: false,
    };
  }

  renderImage = (image: string, size: string, shape: string) => {
    return shape === 'round' ? (
      <Image
        style={
          size === 'large'
            ? styles.imageRoundLarge
            : size === 'small'
            ? styles.imageRoundSmall
            : styles.imageRoundMedium
        }
        source={image}
      />
    ) : (
      <Image
        style={
          size === 'large'
            ? styles.imageSquareLarge
            : size === 'small'
            ? styles.imageSquareSmall
            : styles.imageSquareMedium
        }
        source={image}
      />
    );
  };

  toggleEditPhoto = () => {
    this.setState({ editPhotoMode: !this.state.editPhotoMode });
  };

  selectFromPhotos = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      includeExif: true,
      cropping: true,
    }).then((image) => {
      if (Array.isArray(image)) {
        console.log('More than one image was returned. Selecting the first.');
        image = image[0];
      }
      this.props.callbackSetImage({ path: image.path, width: image.width, height: image.height, mime: image.mime });
    });
  };

  selectFromCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      width: 300,
      height: 400,
      includeExif: true,
      mediaType: 'photo',
    })
      .then((image) => {
        if (Array.isArray(image)) {
          console.log('More than one image was returned. Selecting the first.');
          image = image[0];
        }
        this.props.callbackSetImage({ path: image.path, width: image.width, height: image.height, mime: image.mime });
      })
      .catch((e) => console.log(e));
  };

  render() {
    const options = [
      { text: 'Select From Photos', function: () => this.selectFromPhotos() },
      { text: 'Select From Camera', function: () => this.selectFromCamera() },
      { text: 'Close', function: () => this.toggleEditPhoto() },
    ];
    return (
      <View style={styles.imageArea}>
        <TouchableHighlight
          onPress={() => {
            this.toggleEditPhoto();
          }}>
          {this.props.image ? this.renderImage(this.props.image, this.props.size, this.props.shape) : null}
        </TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.editPhotoMode}
          onRequestClose={() => {
            Alert.alert('Saved changes.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <FlatList
                data={options}
                renderItem={({ item }) => (
                  <TouchableHighlight onPress={item.function} style={styles.optionButton}>
                    <Text style={styles.propertyText}> {item.text} </Text>
                  </TouchableHighlight>
                )}
                keyExtractor={(item) => item.text}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  propertyText: {
    fontSize: 20,
    textAlign: 'center',
  },
  optionButton: {
    padding: 5,
    elevation: 5,
  },
  imageSquareSmall: {
    alignSelf: 'center',
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3,
    borderRadius: 5,
  },
  imageSquareMedium: {
    alignSelf: 'center',
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2,
    borderRadius: 8,
  },
  imageSquareLarge: {
    alignSelf: 'center',
    height: Dimensions.get('window').width / 1.5,
    width: Dimensions.get('window').width / 1.5,
    borderRadius: 12,
  },
  imageRoundSmall: {
    alignSelf: 'center',
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3,
    borderRadius: Dimensions.get('window').width / 6,
  },
  imageRoundMedium: {
    alignSelf: 'center',
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2,
    borderRadius: Dimensions.get('window').width / 4,
  },
  imageRoundLarge: {
    alignSelf: 'center',
    height: Dimensions.get('window').width / 1.5,
    width: Dimensions.get('window').width / 1.5,
    borderRadius: Dimensions.get('window').width / 3,
  },
  imageArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width,
    backgroundColor: Colors.WHITE,
  },
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 1.5,
    elevation: 5,
    backgroundColor: Colors.WHITE,
  },
});
