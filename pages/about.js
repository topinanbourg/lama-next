
import { Button, Card, CardActions, CardContent, CardMedia, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';
import Section from '../components/Section';

import defaultValues from '../scripts/const';
import getNextImage from '../scripts/utils';
import bgStyles from '../styles/bgContainer';
import { Edit, GitHub, Lightbulb } from '@mui/icons-material';
import { useState } from 'react';

const icons = {
    draw: <Edit />,
    idee: <Lightbulb />,
    code: <GitHub />,
}

const images = {
    idee: "doudou.jpg",
    draw: "draw.jpg",
}

const About = () => {

    const imageLink = getNextImage("{img}");
    const [selectedIndex, setSelectedIndex] = useState(defaultValues.aboutTexts[0].key);
    const [selectedBg, setSelectedBg] = useState(imageLink.replace("{img}", images[defaultValues.aboutTexts[0].key]));

    const handleListItemClick = (event, item) => {
        event.stopPropagation();
        if (item.link) {
            window.open(item.link, "_blank");
        } else {
            setSelectedIndex(item.key);
            setSelectedBg(imageLink.replace("{img}", images[item.key]));
        }
    };

    return (
        <Section>
            <Card sx={sxStyles.bgContainer}>
                <CardMedia sx={sxStyles.bgImage}
                    component="img"
                    image={selectedBg}
                    alt="placeholders"
                />
            </Card>
            <Card sx={sxStyles.popInContainer}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {defaultValues.aboutTitle}
                    </Typography>
                    <List>
                        {defaultValues.aboutTexts.map((item) => (
                            <ListItem key={item.key} >
                                <ListItemButton
                                    selected={selectedIndex === item.key}
                                    onClick={(event) => handleListItemClick(event, item)}
                                >
                                    <ListItemIcon>
                                        {icons[item.key]}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <Divider variant="middle" />
                <CardActions sx={sxStyles.btnContainer}>
                    <Button
                        variant="contained" size="small"
                        href='/'
                        component="a"
                    >
                        {defaultValues.aboutBtn}
                    </Button>
                </CardActions>
            </Card>
        </Section>
    );
}

const sxStyles = {
    ...bgStyles,
    popInContainer: {
        ...bgStyles.popInContainer,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
};

export default About;