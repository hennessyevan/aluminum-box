import { BoxProps } from "./box";

export default function expandAliases(props: BoxProps): BoxProps {
  if (props.marginX) {
    props.marginLeft = props.marginLeft || props.marginX;
    props.marginRight = props.marginRight || props.marginX;
    delete props.marginX;
  }
  if (props.marginY) {
    props.marginTop = props.marginTop || props.marginY;
    props.marginBottom = props.marginBottom || props.marginY;
    delete props.marginY;
  }
  if (props.paddingX) {
    props.paddingLeft = props.paddingLeft || props.paddingX;
    props.paddingRight = props.paddingRight || props.paddingX;
    delete props.paddingX;
  }
  if (props.paddingY) {
    props.paddingTop = props.paddingTop || props.paddingY;
    props.paddingBottom = props.paddingBottom || props.paddingY;
    delete props.paddingY;
  }

  return props;
}