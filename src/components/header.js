import React from 'react'
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import classNames from "classnames"
import headerStyles from "../assets/jss/headerStyle"

const useStyles = makeStyles(headerStyles)
export default function Header(props){
    const classes = useStyles();
    const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
      });

      React.useEffect(()=>{
            if(props.changeColorOnScroll){
                window.addEventListener("scroll",headerColorChange)
            }
            return function cleanup(){
                if(props.changeColorOnScroll){
                    window.removeEventListener("scroll",headerColorChange); 
                }
            }
      })

      const headerColorChange = ()=>{
       const {color, changeColorOnScroll} = props
       const windowScrollTop = window.pageYOffset
       if(windowScrollTop > changeColorOnScroll.height){
           document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
           document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color])
       }else{
           document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
           document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color])
       }
    }

    return(<><AppBar className={appBarClasses}>
        <Toolbar>Venkat Mangina</Toolbar></AppBar></>)
}

Header.defaultProp ={
    color: "primary"
}

Header.propTypes = {
    changeColorOnScroll: PropTypes.shape({
        height: PropTypes.number.isRequired,
        color:  PropTypes.oneOf([
            "primary",
            "info",
            "success",
            "warning",
        "transparent"]).isRequired
    }),
    fixed: PropTypes.bool
}
