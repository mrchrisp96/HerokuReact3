import React, { useState } from 'react';

export const aFunc = ()=>({name: 'Chris'});
export default function Hooks(props) {
    const {name} = props;
    let [clicks, setClicks] = useState(0);
    let [clicks2, setClicks2] = useState(1);

    const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 2);
        setClicks2(2 ** (clicks + 1));
    }
    return (
        <React.Fragment>
          <p>Hi, I'm {name}</p>
            <p>2^{clicks}: {clicks2}</p>
            <button onClick={doSomething} data-something="Default">
                Increment square number</button>
        </React.Fragment>

    );
}
