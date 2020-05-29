import React from 'react'
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "../assets/jss/headerStyle";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function Header(props){
    const classes = useStyles();
    // const headerColorChange = () => {
    //     const { color, changeColorOnScroll } = props;
    //     const windowsScrollTop = window.pageYOffset;
    //     if (windowsScrollTop > changeColorOnScroll.height) {
    //       document.body
    //         .getElementsByTagName("header")[0]
    //         .classList.remove(classes[color]);
    //       document.body
    //         .getElementsByTagName("header")[0]
    //         .classList.add(classes[changeColorOnScroll.color]);
    //     } else {
    //       document.body
    //         .getElementsByTagName("header")[0]
    //         .classList.add(classes[color]);
    //       document.body
    //         .getElementsByTagName("header")[0]
    //         .classList.remove(classes[changeColorOnScroll.color]);
    //     }
    //   };

    // React.useEffect(() => {
    //     if(props.changeColorEffect){
    //         window.addEventListener("scroll", headerColorChange)
    //     }
    //     return () => {
    //         if(props.changeColorEffect){
    //             window.removeEventListener("scroll", headerColorChange)
    //         }
    //     }
    // })

    const appBarClasses = classNames({
        
    })
    return(<><AppBar>
        <Toolbar>Header</Toolbar></AppBar></>)
}

Header.defaultProp ={
    color: "primary"
}

Header.propTypes = {
    color: PropTypes.oneOf(["blue", "purple"]),
    changeColorEffect: PropTypes.shape({
        height: PropTypes.number.isRequired,
        color:  PropTypes.oneOf([
            "primary",
            "info",
            "success",
            "warning"]).isRequired
    })
}