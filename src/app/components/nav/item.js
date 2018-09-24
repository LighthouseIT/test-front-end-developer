const Item = props => {
    const hasSubItems = Boolean( props.children )
    const prefix = 'nav__item'

    return (
        <li className={ `${prefix}` }>
            <a
                href={ props.href }
                role={ hasSubItems ? 'button' : '' }
            >
                { props.title }
                {
                    hasSubItems &&
                    <ul className={ `${prefix}__subitems` }>
                        { props.children }
                    </ul>
                }
            </a>
        </li>
    )
}

export default Item