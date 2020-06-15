import React,{Component, useRef} from 'react'
import Header from '../components/header'
import Parallax from "../components/parallax/parallax"
import classNames from "classnames"
import homeStyle from "../assets/jss/homeStyle"
import {makeStyles} from "@material-ui/core/styles"
import GridContainer from "./gridcontainer/GridContainer"
import GridItem from './gridcontainer/GridItem'
import SocialIcon from './socialIcons/SocialIcon'
import Git from "@material-ui/icons/GitHub"
import Linkedin from "@material-ui/icons/LinkedIn"
import Divider from "@material-ui/core/Divider"
import { Table, TableBody,TableRow, Box,List } from '@material-ui/core'
import Experience from './Experience/experience'
import Skills from './Skills/skills'



const useStyles = makeStyles(homeStyle)
export default function Home(props){
    const classes = useStyles()
    const gitref = useRef(null)
    const imageClasses = classNames(
        classes.imgFluid,
        classes.imgRoundedCircle,
        classes.imgRaised
        )
        return (<>
        <Header color="transparent" fixed changeColorOnScroll={{height: 100, color:"success"}}></Header>
        <Parallax small filter image={require("../assets/img/profile-bg.jpg")}></Parallax>
        <div className= {classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
             <div className={classes.profile}>
                  <div>
                    <img src={require("../assets/img/profile-pic.jpg")}  alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Venkata Mangina</h3>
                  </div>
                  <SocialIcon onClick={()=>{const url = 'https://github.com/vm109';
                  window.open(url,"_blank_page"); }} justIcon link className={classes.margin5}><Git color="action" />
                  </SocialIcon>
                  <SocialIcon onClick={()=>{const url = 'https://www.linkedin.com/in/venkatmn';
                  window.open(url,"_blank_page"); }} justIcon link className={classes.margin5}><Linkedin color="action" />
                  </SocialIcon>
             </div>
              </GridItem>
              
              <GridItem>
              <div className={classes.description}>
              <h2 className={classes.header}>About Me</h2>
              <p>Software Engineer Experienced in building Enterprise Applications </p>
              </div>
              </GridItem>
              </GridContainer>
            <Divider orientation={"horizontal"}></Divider>
            <div className={classes.container}>
            <GridContainer>
            <GridItem xs={12} sm={12} md={9}>
            <div><h4 textAlign={"center"}>Experience</h4></div>
            <Experience></Experience>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
            <div><h4 textAlign={"center"}>Skills</h4></div>
            <div textAlign={"center"}>
            <Skills></Skills>
            </div>
            </GridItem>
            </GridContainer>
            </div>
          </div>
        </div>  
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </>)
}