import {useEffect, useState} from 'react';

function DigiClock(){
    const [time, setTime] = useState();

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setTime(new Date().toLocaleString().split(' ')[1])
        }, 1000);

        return clearInterval(intervalId);
    }, [time]);

    return (
        <>
            <h1>{time}</h1>
        </>
    );
}

export default DigiClock;