import React, { useRef } from 'react';

const ScrollToBottom = () => {
    // Создание ref для ссылки на нижний элемент
    const bottomRef = useRef(null);

    // Функция для скроллинга к нижнему элементу
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* Ссылка, при нажатии на которую происходит скроллинг */}
            <button onClick={scrollToBottom}>Перейти вниз</button>

            {/* Контент страницы */}
            <div style={{ height: '1500px' }}>
                {/* Здесь может быть ваш контент */}
            </div>

            {/* Нижний элемент, к которому будет произведен скроллинг */}
            <div ref={bottomRef}></div>
        </div>
    );
};

export default ScrollToBottom;
