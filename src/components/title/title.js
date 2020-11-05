import React from 'react';

function Title(props) {
    return (
        <>
            <h1>
                {props.text}
            </h1>
            <li key={props.item}>
                {props.item}
            </li>
        </>
        
    );
}

export default Title;