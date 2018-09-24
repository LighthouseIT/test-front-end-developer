import React from 'react'
import { v4 } from 'uuid'

import Item from './item'
import Options from './options'

export default class Nav extends React.Component {
    constructor( props ) {
        super( props )
        this.prefix = `nav`
    }

    mount( item ) {
        const subitems = item.subitems && item.subitems.map( item => {
            return (
                <Item
                    key={ v4() }
                    title={ item.title }
                />                
            )
        } )

        return (
            <Item
                key={ v4() }
                title={ item.title }
            >
                { subitems }
            </Item>
        )
    }

    render() {
        return (
            <ul className={ prefix }>
                { Options.map( this.mount ) }
            </ul>
        )
    }
}

export default Nav