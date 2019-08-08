import React from 'react'

export default (props) => (
    <select onChange={e => props.handleChange(props.prop, e)}>
        {props.children}
    </select>
)