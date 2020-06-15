import React from "react"
import propTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const styles = {
    grid: {
        position: "realtive",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        flexBasis: "auto"
    }
}

const useStyles = makeStyles(styles)

export default function GridItem(props) {
    const classes = useStyles()
    const { children, className, ...rest } = props
    return ( <> < Grid {...rest } item className = { classes.grid + " " + className } > { children } </Grid></> )

}

GridItem.defaultProps = {
    className: ""
  };
  
GridItem.propTypes = {
    children: propTypes.node,
    className: propTypes.string
}