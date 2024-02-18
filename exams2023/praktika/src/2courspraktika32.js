import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

function ImageLinkCard() {
    const imageUrl = 'https://img.goodfon.ru/wallpaper/nbig/9/ba/eduard-gordeev-khram-vasiliia-blazhennogo-krasnaia-ploshch-1.jpg'; // Замените на URL вашего изображения

    return (
        <Card sx={{ maxWidth: 345, borderRadius: '16px' }}>
            <CardActionArea href={imageUrl} target="_blank">
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt="Изображение"
                />
            </CardActionArea>
        </Card>
    );
}

export default ImageLinkCard;
