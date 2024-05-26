import { memo, useContext, useRef } from "react";
import AppLayout from "../components/layouts/AppLayout";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/Context";
import { useReactToPrint } from 'react-to-print';

const Instance = () => {
    const containerRef = useRef(null);
    const { _id } = useParams();
    const { fetchTheCurrentInstance } = useContext(MyContext);
    const thisInstance = fetchTheCurrentInstance(_id);
    
    const handlePrint = useReactToPrint({
        content: () => containerRef.current
    });

    return (
        <Box marginBlock={'3rem'}>
            <Container
                ref={containerRef}
                sx={{
                    width: '1200px',
                    padding: '20px !important',
                    bgcolor: 'black',
                }}
            >
                <div style={{ padding: '2rem 1rem 1rem', border: '5px solid #FFC100', backgroundColor: 'white' }}>
                    <Grid container columns={5} alignItems={'center'} justifyContent={'center'} sx={{ overflowX: 'auto', gap: '1rem' }}>
                        {
                            thisInstance?.data?.map((instance) => {
                                const { image, productName, value } = instance;
                                return (
                                    <Grid item border={'1px solid #333'} key={instance._id}>
                                        <Stack direction={'column'} width={'13rem'} textAlign={'center'} padding={'1rem'}>
                                            {image && <img src={`/images/${image}`} alt={productName} style={{ width: '100%', aspectRatio: '1/1' }} />}
                                            <Typography variant="caption" marginBlock={'1rem 0'}>{productName}</Typography>
                                            <Typography variant="caption">{value}</Typography>
                                        </Stack>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                    <Box marginTop={'1.5rem'} textAlign={"right"}>
                        <Button variant="contained" sx={{ textTransform: 'uppercase' }}>
                            {thisInstance?.instanceName}
                        </Button>
                    </Box>
                </div>
                <Typography variant="h3" color={'#b7772b'} textAlign={'right'} marginTop={'1rem'}>AbreuGold</Typography>
            </Container>

            <Box marginBlock={'3rem'} textAlign={'center'}>
                <Button size="large" variant="outlined" onClick={handlePrint}>
                    Save as PDF
                </Button>
            </Box>
        </Box>
    );
}

export default AppLayout()(memo(Instance));