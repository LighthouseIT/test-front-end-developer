import React from 'react'

import MaterialIcon from 'material-icons-react'

export default class Hamburger extends React.Component {
    constructor( props ) {
        super( props )
        this.prefix = `hamburger`
    }

    onClick() {

    }

    render() {  
        <div
            className={ this.prefix }
            role={ `button` }
        >
            <MaterialIcon icon={ `menu` } />
        </div>
    }   
}