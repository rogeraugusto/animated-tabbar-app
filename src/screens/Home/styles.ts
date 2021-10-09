import styled from 'styled-components/native';
import { FlatList, Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const ImageCover = styled.View``;
export const ImageBackgroundCover = styled(Animated.Image)``;

export const ItemList = styled.View`
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.8);
`;

export const ImageItem = styled.Image``;

export const ImageList = styled(
  Animated.FlatList as new () => Animated.FlatList,
).attrs({
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
})``;
