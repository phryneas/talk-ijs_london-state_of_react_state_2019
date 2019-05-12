export default {
  font: '"Source Sans Pro", "Open Sans", Helvetica, Arial',
  colors: {
    text: "#707372",
    heading: "#e35205",
    background: "#ffffff",
    link: "f000"
  },
  Slide: {
    backgroundImage: `url('${require("!!file-loader!./assets/iJS_London_2018_Template_1920x1080_49699_v1b.webp")}')`,
    backgroundPositionX: "center",
    backgroundPositionY: "bottom",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundOrigin: "initial",
    backgroundClip: "initial",
    paddingBottom: "calc( 100vw * 0.07275 )",
    paddingRight: "3vw",
    paddingLeft: "3vw",
    justifyContent: "start"
  },
  Split: {
    width: "100vw"
  },
  blockquote: {
    fontSize: "0.7em",
    textAlign: "left",
    paddingLeft: "1em",
    borderLeft: "0.2em solid darkgray",
    "&>cite": {
      marginLeft: "2em",
      display: "block",
      fontSize: "0.7em",
      fontStyle: "italic",
      float: "right"
    }
  }
};
