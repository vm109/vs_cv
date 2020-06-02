import React from "react"

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import style from "../../assets/jss/GridStyle"
import propTypes from "prop-types"
const useStyle = makeStyles(style)

export default function GridContainer(props){
    const {children, className, ...rest} = props
const classes = useStyle()
    return (<>
        <Grid container {...rest} className={classes.grid+" "+className}>{children}</Grid>
        </>)
    
}

GridContainer.prototypes = {
    children : propTypes.node,
    className: propTypes.string
}