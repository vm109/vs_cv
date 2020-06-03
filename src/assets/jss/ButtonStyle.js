import {
grayColor,
roseColor,
primaryColor,
infoColor,
successColor,
dangerColor,
warningColor
} from "./material-kit-react"

const buttonStyle = {
    github: {
        backgroundColor: "#333333",
        color: "#fff",
        boxShadow:
      "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
        "&:hover,&:focus":{
            backgroundColor: "#333333",
            color:"#fff",
            boxShadow:
            "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)"
        }
    }
}

export default buttonStyle