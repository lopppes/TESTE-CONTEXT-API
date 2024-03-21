import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import './card.css';

export const Card = () => {
    const { theme } = useContext(ThemeContext);

    const cardsData = [
        {
            title: 'Test',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
            link: '#'
        },
        {
            title: 'Test',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
            link: '#'
        },
        {
            title: 'Test',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
            link: '#'
        }
    ];

    return (
        <div className='card'>
            <div className="services">
                {cardsData.map((card, index) => (
                    <div key={index} className={`content content-${index + 1}`} style={{ color: theme.color, backgroundColor: theme.background }}>
                        <div className={card.icon}></div>
                        <h2>{card.title}</h2>
                        <p>{card.text}</p>
                        <a href={card.link}>View More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};
