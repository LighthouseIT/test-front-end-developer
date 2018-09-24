import React from 'react'

import MaterialIcon from 'material-icons-react'
import Hamburger from '../hamburger'
import Nav from '../nav'

const Menu = props => {
    const prefix = 'menu'

    return (
        <div className={ prefix }>
            <div className={ `${prefix}__main` }>
                <Hamburger />
                <div className={ `${prefix}__main__title` }>
                    { props.title }
                </div>
                <div
                    className={ `${prefix}__main__title` }
                >
                    <MaterialIcon icon={ `search` } />>
                </div>
            </div>
            <div className={ `${prefix}__nav` }>
                <Nav />
            </div>
        </div>
    )
}

export default Menu