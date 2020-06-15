import React from "react"
import propTypes from "prop-types"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import socialIconStyle from "../../assets/jss/socialIconStyle"

const useStyles = makeStyles(socialIconStyle)

const SocialIcon = React.forwardRef((props, ref) => {
    const classes = useStyles()
    const {
        color,
        round,
        children,
        fullWidth,
        disabled,
        simple,
        size,
        block,
        link,
        justIcon,
        className,
        onClick,
        ...rest
    } = props
    const socialIconClasses = classNames({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [className]: className
    })
    return ( < > < Button onClick = { onClick }
        className = { socialIconClasses } > { children } < /Button> < / >
    )
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
    size: propTypes.oneOf(["sm", "lg"]),
    disabled: propTypes.bool,
    link: propTypes.bool,
    justIcon: propTypes.bool
}

export default SocialIcon