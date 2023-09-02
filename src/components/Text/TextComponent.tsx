import React from 'react';
import {Text} from 'react-native';
import {COLORS} from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

type HeadingProps = {
  type: 'Regular' | 'Bold' | 'SemiBold' | 'Light' | 'Medium' | 'ExtraBold';
  text: string | number;
  size?: number;
  color?: string;
};
const TextComponent = (props: HeadingProps) => {
  const {type = 'Regular', text, size = 16, color = COLORS.DARK_GREY} = props;
  return <Text style={Fonts[type](size, color)}>{text} </Text>;
};

export default TextComponent;
