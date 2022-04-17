import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Paper, Button } from '@mui/material';

export default function ClassifiedAds() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const[classifiedAds,setClassifiedAds]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8081/classifiedAds/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setClassifiedAds(result);
        }
        )
    },[])


    return (
        <Container>
            <br/>
            <Button href="/" variant="contained" style={{ background: "#ed1c2a" }} >
            Добави малка обява
            </Button>
            <Paper elevation={3} style={paperStyle}>
                {classifiedAds.map(classifiedAd=>(
                    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={classifiedAd.id}>
                        <b>Номер на Обява:</b> {classifiedAd.id}   <b>{classifiedAd.type}</b><br/><br/>
                        {classifiedAd.text}<br/><br/>
                        <b>Улица:/ж.к.:</b> {classifiedAd.address} <b>Град:</b> {classifiedAd.city}<br/>
                        <b>Име:</b> {classifiedAd.contactName} <b>Телефон:</b> {classifiedAd.contactPhone}<br/>
                        <b>Добавена на:</b> {classifiedAd.entryDate} <b>Валидна до:</b> {classifiedAd.expiryDate}<br/>
                    </Paper>
                ))}
            </Paper>
        </Container>
    );
}
