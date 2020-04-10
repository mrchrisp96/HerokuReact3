import React, { useState, useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
export default function Fetcher(props) {
    const { url } = props;
    let [clicks, setClicks] = useState(0);
    const [response, setResponse] = useState(null);

    useEffect( ()=> {
      const  fetchData= async()=>{
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      }
      fetchData();
    }, [url, clicks]);

    const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 1);
    }
    return (
        <React.Fragment>
            <p>Number of times data retrieved: {clicks}</p>
            <button onClick={doSomething} data-something="Default">
                Retrieve User Data</button>
            <p>{response? JSON.stringify(response) : 'waiting'}</p>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="rect" height={118} />
        </React.Fragment>

    );
}
