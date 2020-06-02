import React from "react"
import classNames from "classnames"
import propTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles";
import parallaxStyles from "../../assets/jss/parallaxStyles"
const useStyle = makeStyles(parallaxStyles)

export default function Parallax(props){
let windowScrollTop;
if(window.innerWidth >= 768){
    windowScrollTop = window.pageYOffset / 3;
}else{
    windowScrollTop = 0;
}    
const [transform, setTransform] = React.useState(
    "translate3d(0,"+windowScrollTop+"px,0)"
)

React.useEffect(()=>{
    if(window.innerWidth >= 768){
        window.addEventListener("scroll", resetTransform)
    }
    return function cleanup(){
        if(window.innerWidth >= 768){
            window.removeEventListener("scroll", resetTransform)
        }
    }
})
const resetTransform = ()=>{
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0,"+windowScrollTop+"px,0)")
}
const classes = useStyle()
const {filter, children, className, small, image, style} = props
const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small, 
    [className]: className !== undefined
})
    return (<><div 
        className={parallaxClasses} 
        style={{...style, 
            backgroundImage:"url("+image+")", 
            transform: transform }}>
    </div></>)
}

Parallax.propTypes = {
  filter: propTypes.bool,
  children: propTypes.node,
  image: propTypes.string,
  small : propTypes.bool,
  style: propTypes.string,
  className: propTypes.string
}