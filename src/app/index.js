import React from 'react'
import ReactRouterDOM from 'react-router-dom'
import Places from './views/places'
import { HashRouter, Switch, Route } from 'react-router-dom'

const App = () => {
    let prefix = 'view'

    return (
        <main className={prefix}>
            <div className={`${prefix}__container`}>
                <HashRouter>
                    <Switch>
                        <Route path='/' component={Places} />
                    </Switch>
                </HashRouter>
            </div>
        </main>
    )
}

export default App