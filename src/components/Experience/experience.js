import React from "react"
import{ List ,ListItem, Divider, Container, Typography }from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import { container } from "../../assets/jss/material-kit-react";
import { typography } from '@material-ui/system'
const styles = {
    image: { 
        height: "auto",
        width: "8%",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    ...container,
    container_style: {
        style: ""
    }
}

const useStyles = makeStyles(styles)
export default function Experience(props){
const classes = useStyles()
    return (<><List>

        <ListItem>
        <img className={classes.image} src={require("../../assets/img/washpost.jpg")}/>
        <Container className={classes.container}>
        <Typography>
        •  FE development using reactjs containarized application
        <br/>
        •  For Reservations service used MongoDb for persistence layer.
        <br/>
        • Experience with AWS for application infrastructure. 
            Ec2, ECS, CloudFormation, CodePipeline, SSM 
        </Typography>             
        </Container>
        </ListItem>
        <Divider light={false} orientation={"horizontal"}></Divider>
        <ListItem> <img className={classes.image} src={require("../../assets/img/hyatt.jpg")}/>
        <Container className={classes.container}>
        •  FE development using angular2 Containerized applications using Docker for shipping easy.
        <br/>
        •  For Reservations service used MongoDb as the backend.
        <br/>
        • Leveraged the JAVA Collections API for handling the data objects between the business layers and the front end
        •  FE development using angular2 Containerized applications using Docker for shipping easy.
        <br/>
        •  For Reservations service used MongoDb as the backend.
        <br/>
        • Leveraged the JAVA Collections API for handling the data objects between the business layers and the front end
        </Container>
        </ListItem>
        <Divider light={false} orientation={"horizontal"}></Divider>
        <ListItem> 
        <img className={classes.image} src={require("../../assets/img/grainger.jpg")}/>
        <Container className={classes.container}>
        •  FE development using angular2 Containerized applications using Docker for shipping easy.
        <br/>
        •  For Reservations service used MongoDb as the backend.
        <br/>
        • Leveraged the JAVA Collections API for handling the data objects between the business layers and the front end
        •  FE development using angular2 Containerized applications using Docker for shipping easy.
        <br/>
        •  For Reservations service used MongoDb as the backend.
        <br/>
        • Leveraged the JAVA Collections API for handling the data objects between the business layers and the front end
        </Container>
        </ListItem>
        </List></>)
}