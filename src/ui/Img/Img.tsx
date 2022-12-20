import React from "react";
import { Image as NativeImage, Dimensions, ImageSourcePropType } from "react-native";

interface ImgProps {
  source: ImageSourcePropType;
  marginHorizontal?: number;
  alt?: string;
}

const Img = ({ source, marginHorizontal = 0, alt }: ImgProps) => {
  const dimensions = Dimensions.get("window");
  // const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width - marginHorizontal;

  return <NativeImage source={source} style={{ width: imageWidth }} />;
};

export default Img;
