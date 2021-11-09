import React from 'react'

export default function Input(props) {
    return (
        <div style={{ height: "46px", ...props?.style }}>
            <input
                style={{ backgroundColor: "lightgray", color: "black", border: "1px solid #1a243a", borderRadius: "7px", padding: '10px', outline: 'none' }}
                placeholder={props?.placeholder}
                type={props?.type}
            />
        </div>
    )
}