import React from "react"
import propTypes from "prop-types"
import classNames from "classnames"
import {makeStyles} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import buttonStyle from "../../assets/jss/ButtonStyle"

const useStyles = makeStyles(buttonStyle)

const SocialIcon= React.forwardRef((props, ref)=>{
const classes = useStyles()
const {color, round,onClick, children, className, size, disabled, link, ...rest} = props
const socialIconClasses = classNames({
    [classes.button]: true,
    [className]: className
})
    return (<><Button onClick={onClick} className={socialIconClasses}>{children}</Button>
        </>)
})

SocialIcon.propTypes = {
    color: propTypes.oneOf([
        "primary",
        "info",
        "rose",
        "white",
        "github",
        "transparent"  
    ]),
    children: propTypes.node, 
    className: propTypes.string,
    size: propTypes.oneOf(["sm","lg"]),
    disabled: propTypes.bool,
    link: propTypes.bool,
    justIcon: propTypes.bool
}

export default SocialIcon