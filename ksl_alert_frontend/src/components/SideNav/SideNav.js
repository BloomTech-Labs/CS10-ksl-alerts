import React, { Component } from 'react'

export default class SideNav extends Component {
    render() {
        return (
            <div>
                <Link to="/feed">Alerts</Link>
                <Link to="/createAlert">Create Alert</Link>
                <Link to="/billing">Billing</Link>
                <Link to="/settings">Settings</Link>
            </div>
        )
    }
}