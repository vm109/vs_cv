import imageStyle from "./imageStyles"

const homeStyle = {
    ...imageStyle,
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised:{
        marging: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    profile:{
        textAlign: "center",
        "& img":{
            maxWidth: "160px",
            width: "100%",
            margin: "0 auto",
            transform: "transform3d(0, -50%, 0 )"
        }
    }
}

export default homeStyle