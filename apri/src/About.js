import React from 'react'
import ShowHide  from'./ShowHide'
import {Button, FormControl, ControlLabel,
    FormGroup, Radio, Checkbox, HelpBlock,
    Col,Grid
} from 'react-bootstrap'


const Layout = () => (
    <div className="about-div">
<ShowHide/>
    </div>
)





class About extends React.Component{

    render(){

        return(

            <div>
                <div className="container-fluid firstLook-contact"></div>
                <div className="container-fluid background-cont">
                    <img src="/apple.png" className="img-first" alt=""/></div>
                <Grid>



                    <Col xs={12} md={8}><div className="container">
                        {/*<div className="laptop"><img src="/desktop.png" className="img-laptop" alt=""/></div>*/}
                        <div className="">
                            lorem  ipsum
                        </div>
                    </div>
                    </Col>

                    <Col xs={6} md={4}><div className="data-location">
                        <div className="list-data">
                            <h3>Dowiedz się więcej</h3>
                            <div className="separator"></div>
                           <Layout/>
                        </div></div></Col>
                </Grid>
                {/*<Footer/>*/}
            </div>


        )
    }



}

export default About