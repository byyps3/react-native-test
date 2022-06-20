import _ from 'lodash';
import Clipboard from '@react-native-clipboard/clipboard';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import { Platform, Dimensions, StatusBar } from 'react-native';

// iPhone X、iPhone XS
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhone XR、iPhone XS Max
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const IPHONE12_H = 844;
const IPHONE12_MAX = 926;
const IPHONE12_MIN = 780;

const DEVICE_SIZE = Dimensions.get('window');
const { height: D_HEIGHT, width: D_WIDTH } = DEVICE_SIZE;

const copy = (text: string) => {
  Clipboard.setString(text);
}

const isiPhoneX = () => {
  return (
    (Platform.OS === 'ios' &&
      ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
        (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))) ||
    (D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
    (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT) ||
    D_HEIGHT === IPHONE12_H ||
    D_HEIGHT === IPHONE12_MAX ||
    D_HEIGHT === IPHONE12_MIN
  )
}

const getStatusBarHeight = () => {
  return Platform.OS !== 'ios' ? StatusBar.currentHeight : Platform.OS === 'ios' ? (isiPhoneX() ? 34 : 20) : 0;
}

interface IBase64SaveAsFile {
  base64Img: string
  name: string
  success: Function
}

const base64SaveAsFile = ({base64Img, name, success}: IBase64SaveAsFile) => {
  const dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath;
  const downloadDest = `${dirs}/${name}`;
  const imageDatas = base64Img.split('data:image/png;base64,');
  const imageData = imageDatas[1];
  RNFetchBlob.fs.writeFile(downloadDest, imageData, 'base64').then(() => {
    success(`file://${downloadDest}`)
  })
}

export default {
  copy, // 复制文本到剪切板
  isiPhoneX, // 是否iPhoneX
  getStatusBarHeight, // 页头高度
  base64SaveAsFile, // base64转文件流
}