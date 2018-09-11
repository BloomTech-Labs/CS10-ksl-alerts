import React, { Component } from "react";

export default class CreateAlert extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    name="Alert Title"
                    placeholder="Alert Title"
                />
                <input
                    type="text"
                    name="Query String Link"
                    placeholder="Query String Link"
                />
                <button>Create Alert</button>
            </div>
        );
    }
}