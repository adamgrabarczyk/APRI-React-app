import React from 'react'
import {Button, FormControl, ControlLabel,
FormGroup, Radio, Checkbox, HelpBlock,
 Col,Grid
} from 'react-bootstrap'

import Footer from './Footer'


function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class Contact extends React.Component{

    render(){

        return(

            <div>
<div className="container-fluid firstLook-contact"></div>
                <div className="container-fluid background-cont">
                    <img src="/apple.png" className="img-first" alt=""/></div>
<Grid>



    <Col xs={12} md={8}><div className="container cont">
{/*<div className="laptop"><img src="/desktop.png" className="img-laptop" alt=""/></div>*/}
                <div className="contact-form">
                <form>
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Imie i Nazwisko/ Nazwa firmy"
                        placeholder="Enter text"
                    />
                    <FieldGroup
                        id="formControlsEmail"
                        type="email"
                        label="Adres e-mail"
                        placeholder="Enter email"
                    />


                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Wiadomość</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Static text</ControlLabel>
                        <FormControl.Static>
                            email@example.com
                        </FormControl.Static>
                    </FormGroup>

                    <Button type="submit" onClick={console.log("adam")}>
                        Wyślij
                    </Button>
                </form>
                </div>
            </div></Col>
    <Col xs={6} md={4}><div className="data-location">
        <div className="list-data">
        <h3>Znajdź nas</h3>
        <div className="separator"></div>
        <p><img src="/office.png" className="cont-icon" alt=""/> 80-300, Gdynia, ul.Kwiatkowskiego 7/23</p>
        <p><img src="/message.png" className="cont-icon2" alt=""/> ewa@a-priori.pl</p>
            <p><img src="/phone.png" className="cont-icon3" alt=""/> 502 614 262</p>
        </div></div></Col>
</Grid>
                {/*<Footer/>*/}
            </div>


        )
    }



}

export default Contact