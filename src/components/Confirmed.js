import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class Confirmed extends Component {


    render() {
        const divStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'

        }
        const leftStyle = {
            marginRight: '1000px',
            align: 'left',
        }

        return (
            <div className=" Confirmed">

                <div >

                    <h2 style={leftStyle}>YOUR BIKE  </h2>
                </div>
                <div style={divStyle}>
                    <div>   </div>
                    <div >
                        <img src='../img/found' />
                    </div>
                    <div >
                        Usuario parker
                    </div>
                    <div>   </div>
                    <div>   </div>
                    <div>   </div>
                    <div>   </div>
                    <div>   </div>
                    <div>   </div>
                </div>
                <div style={divStyle}>
                    <div>   </div>
                    <Button
                        type="submit"
                        variant="raised"
                        color="white"
                        className="submit"

                    >
                        contact
                            </Button>
                    <div>   </div>
                    <Button
                        type="submit"
                        variant="raised"
                        color="white"
                        className="cancel"
                    >
                        cancel
                            </Button>
                    <div>   </div>
                    <div>   </div>
                    <div>   </div>
                </div>

            </div>

        );
    }

}

export default Confirmed;