import React,{Component} from "react"
import Header from "./header"

class Contact extends Component{
    render(){
        return <> <Header changeColorOnScroll={{
            height: 20,
            color: "warning"
          }}/><div> Welcome Contacts</div></>
    }
}

export default Contact