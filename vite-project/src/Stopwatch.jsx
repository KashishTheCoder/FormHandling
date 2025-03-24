import {useEffect, useState} from 'react';

function Stopwatch(){
    const [time, setTime] = useState([0, 0, 0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(([hrs, mins, secs]) => {
                secs++;
                if(secs === 60){
                    mins++;
                    secs = 0;
                }
                if(mins === 60){
                    hrs++;
                    mins = 0;
                }
                return [hrs, mins, secs];
            }
        );
        }, 1000); 

        return (
            () => clearInterval(intervalId)
        );
    }, []);

    return (
        <>
            <h1>{time.join(":")}</h1>
        </>
    );
}

export default Stopwatch