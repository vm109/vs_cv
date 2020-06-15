import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {List, ListItem, LinearProgress, ListItemIcon, ListItemText} from "@material-ui/core"
import classNames from "classnames"

const styles = {
    root: {
      height: 10,
          width: 200,
      backgroundColor: 'grey',
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#ff6c5c',
    },
    listClasses:{
      width: '100%',
      maxWidth: 80
    }
  }
  const useStyles = makeStyles(styles)
export default function Skills(props){
    const classes =  useStyles();
    const progressClasses = classNames({
        [classes.root]: "root",
        [classes.bar] : "bar"
    })
    return (<><List>
        <ListItem><ListItemIcon className={classes.listClasses}>Java</ListItemIcon>
        <LinearProgress className={progressClasses} variant="determinate" color="secondary" value={90} valueBuffer={50}/>
        </ListItem>

        <ListItem><ListItemIcon className={classes.listClasses}>React</ListItemIcon>
        <LinearProgress className={progressClasses} variant="determinate" color="secondary" value={80} valueBuffer={50}/>
        </ListItem>
        
        <ListItem>
        <ListItemIcon className={classes.listClasses}>JS</ListItemIcon>
        <LinearProgress className={progressClasses} variant="determinate" color="secondary" value={50} valueBuffer={50}/>
        </ListItem>

        <ListItem>
        <ListItemIcon className={classes.listClasses}>AWS</ListItemIcon>        
        <LinearProgress className={progressClasses} variant="determinate" color="secondary" value={50} valueBuffer={50}/>
        </ListItem>

        <ListItem>
        <ListItemIcon className={classes.listClasses}>NodeJs...</ListItemIcon>        
        <LinearProgress className={progressClasses} variant="determinate" color="secondary" value={50} valueBuffer={50}/>
        </ListItem>
        </List></>)
}