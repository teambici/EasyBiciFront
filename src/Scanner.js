import React, { Component } from 'react'
import QrReader from 'react-qr-reader'


class Scanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 'No result'
        }
    }


    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        const divStyle = {
            heigth: '100vh',
            width: '100vw',
        };
        return (
            <div style={divStyle} >
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%', heigth:'100%'}}
                    showViewFinder= {true}
                />

                <p>{this.state.result}</p>
            </div>
        )
    }
}
export default Scanner;
