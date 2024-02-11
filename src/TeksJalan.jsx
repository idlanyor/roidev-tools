import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const TeksJalan = () => {
    const [data, setData] = useState([]);
    const [textColors, setTextColors] = useState([]);

    useEffect(() => {
        axios.get('https://candaan-api-bay.vercel.app/api/text/random?count=15')
            .then(
                (res) => {
                    setData(res.data.data);
                    // console.log(res.data)
                    const colors = res.data.data.map(() => getRandomDarkColor());
                    setTextColors(colors);
                }
            )
            .catch((e) => {
                console.log(e)
                setData([
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan',
                    'Server Gangguan'
                ])
            })
    }, []);

    const getRandomDarkColor = () => {
        const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 6) + 9]; // Values between 9 and F are darker
        }
        return color;
    };

    return (
        <div className="horizontal-scroll-container bg-black py-2 rounded-md">
            <div className="horizontal-scroll-wrapper font-bold">
                {data && data.map((d, index) => (
                    <div
                        key={index} className="horizontal-scroll-text"
                        style={{ color: textColors[index] }}>{d}</div>
                ))}
            </div>
        </div>
    );
};

export default TeksJalan;
