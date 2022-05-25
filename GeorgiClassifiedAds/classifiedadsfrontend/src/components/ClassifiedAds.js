import * as React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export default function ClassifiedAds() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const [type, setType] = useState('')
    const [text, setText] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [contactName, setContactName] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const [classifiedAds, setClassifiedAds] = useState([])
    const [IsAddNew, setIsAddNew] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleClick = (e) => {
        e.preventDefault()
        const newClassifiedAd = { type, text, address, city, contactName, contactPhone }
        fetch("http://localhost:8081/classifiedAds/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newClassifiedAd)
        }).then(() => {
            console.log("Нова обява добавена!")
            setIsAddNew(!IsAddNew)
            setRefreshKey(oldKey => oldKey +1)
        })
    }

    useEffect(() => {
        fetch("http://localhost:8081/classifiedAds/getAll")
            .then(res => res.json())
            .then((result) => {
                setClassifiedAds(result);
            }
            )
    }, [refreshKey])


    return (
        <Container>
            <br />
            <div hidden={IsAddNew}>
                <Button onClick={() => setIsAddNew(!IsAddNew)} variant="contained" style={{ background: "#ed1c2a" }} >
                    Добави малка обява
                </Button>
                <Paper elevation={3} style={paperStyle}>
                    {classifiedAds.map(classifiedAd => (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={classifiedAd.id}>
                            <b>Номер на Обява:</b> {classifiedAd.id}   <b>{classifiedAd.type}</b><br /><br />
                            {classifiedAd.text}<br /><br />
                            <b>Улица:/ж.к.:</b> {classifiedAd.address} <b>Град:</b> {classifiedAd.city}<br />
                            <b>Име:</b> {classifiedAd.contactName} <b>Телефон:</b> {classifiedAd.contactPhone}<br />
                            <b>Добавена на:</b> {classifiedAd.entryDate} <b>Валидна до:</b> {classifiedAd.expiryDate}<br />
                        </Paper>
                    ))}
                </Paper>
            </div>
            <div hidden={!IsAddNew}>
                <Button onClick={() => setIsAddNew(!IsAddNew)} variant="contained" style={{ background: "#ed1c2a" }} >
                    Всички обяви
                </Button>
                <Paper elevation={3} style={paperStyle}>
                    <h2 style={{ color: '#ed1c2a' }}><u>Нова обява</u></h2>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 }, display: 'flex', flexWrap: 'wrap'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <RadioGroup
                            row
                            aria-labelledby="type-radio-buttons-group-label"
                            name="type-row-radio-buttons-group"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <FormControlLabel value="Търся" control={<Radio />} label="Търся" />
                            <FormControlLabel value="Предлагам" control={<Radio />} label="Предлагам" />
                        </RadioGroup>
                        <TextField
                            id="classifiedText" 
                            label="Текст на обява" 
                            variant="outlined" 
                            fullWidth
                            multiline
                            rows={4}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <TextField
                            id="classifiedAddress"
                            label="Улица:/ж.к."
                            variant="outlined"
                            fullWidth
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <TextField
                            id="classifiedCity"
                            label="Град"
                            variant="outlined"
                            fullWidth
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <TextField
                            id="classifiedContactName"
                            label="Име"
                            variant="outlined"
                            fullWidth
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                        />
                        <TextField
                            id="classifiedContactPhone"
                            label="Телефон за контакт"
                            variant="outlined"
                            fullWidth
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                        />
                        <Button variant="contained" color="inherit" onClick={handleClick}>
                            Добави
                        </Button>
                    </Box>
                </Paper>
            </div>
        </Container>
    );
}
