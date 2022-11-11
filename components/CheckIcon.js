import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CheckboxIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={11} height={9} {...props}>
    <Path fill="none" stroke="#FFF" strokeWidth={2} d="M1 4.304 3.696 7l6-6" />
  </Svg>
)

export default CheckboxIcon
