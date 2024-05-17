import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';

const images = [
    { title: 'Название 1', url: 'https://2022-god.com/wp-content/uploads/2021/08/ceny-na-novogodnie-tury-v-moskvu-v-2022-godu.jpg' },
    { title: 'Название 2', url: 'https://almode.top/uploads/posts/2021-12/1639078299_5-almode-ru-p-novogodnyaya-moskva-5.jpg' },
    { title: 'Название 3', url: 'https://globusmira.ru/wp-content/uploads/2019/09/DSZz_eAW4AAD8V3.jpg-large.jpg' },
    { title: 'Название 4', url: 'https://tury.bars-tur.ru/uploads/tours/tour/images/1649_b.jpg' },
    { title: 'Название 5', url: 'https://almode.top/uploads/posts/2021-12/1639078384_55-almode-ru-p-novogodnyaya-moskva-58.jpg' }
];

const ImageGallery = () => {
    return (
        <div>
            <Grid container spacing={4} justifyContent="center">
                {images.map((image, index) => (
                    <Grid item key={index}>
                        <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
                            <Typography variant="h6" gutterBottom>
                                {image.title}
                            </Typography>
                            <img src={image.url} alt={image.title} style={{ width: '100%', borderRadius: '10px' }} />
                        </Paper>
                        {index < images.length - 1 && (
                            <>
                                <br />
                                <br />
                            </>
                        )}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ImageGallery;
