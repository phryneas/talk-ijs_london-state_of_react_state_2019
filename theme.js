import theme from "mdx-deck/themes";
import codeSurferTheme from "prism-react-renderer/themes/duotoneLight";

export default {
  ...theme,
  font: '"Source Sans Pro", "Open Sans", Helvetica, Arial',
  colors: {
    text: "#707372",
    heading: "#e35205",
    background: "#fff",
    link: "f000"
  },
  codeSurfer: {
    ...codeSurferTheme,
    showNumbers: true
  }
};
