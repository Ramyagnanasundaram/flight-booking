import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

export interface Flight {
    id: number;
    flightNo: string;
    source: string;
    destination: string;
    avilableSeats: number;
}

interface FlightListProps {
    flights: Flight[];
    manageFlight?: boolean
}

const FlightList: React.FC<FlightListProps> = ({ flights, manageFlight }) => {
    const navigate = useNavigate()

    return (
        <>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            { manageFlight ? 'Manage Flights' : 'Avilable Flights'}
                        </Typography>
                    </Container>
                </Box>
                <Box textAlign={'center'}>
                    <Button variant='outlined' onClick={() => {
                        navigate('/addflight')
                    }}>
                        Add New Flight
                    </Button>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {flights.length === 0 && <>No Records Found</>}
                        {flights.map((flight) => (
                            <Grid item key={flight.id} xs={12} sm={12} md={12}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {flight.flightNo}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {flight.source} - {flight.destination}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ marginLeft: 'auto' }}>
                                        {manageFlight &&
                                            <>
                                                <Button variant='outlined' size="small" >Edit</Button>
                                                <Button variant='outlined' size="small" >Delete</Button>
                                            </>}
                                        {
                                            !manageFlight &&
                                            <Button variant='outlined' size="small" disabled={flight.avilableSeats <= 0}>Book Flight</Button>

                                        }
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </>
    );
};

export default FlightList;
