import { useEffect,useState } from "react";
export const TodoDate = () => {
    const [dateTime, setDateTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            let formattedDate = now.toLocaleDateString();
            let formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);
        
        return () => clearInterval(interval);
    }, [])
    return <h2 className="date-time">{dateTime}</h2>
}