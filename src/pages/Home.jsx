import { Container, Grid, Typography } from "@mui/material";
import AppLayout from "../components/layouts/AppLayout";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import InstanceItem from "../components/specific/InstanceItem";

const Home = () => {
    const { filesList } = useContext(MyContext);

    return (
        <Container sx={{ paddingBlock: '3rem' }}>
            <Typography variant={'h5'} marginBottom={'1rem'}>Your Files</Typography>
            <Grid container spacing={'1rem'} columns={{ xs: 3, sm: 6, md: 8 }}>
                {
                    filesList?.map((file) => <InstanceItem key={file._id} name={file.name} _id={file._id} />)
                }
            </Grid>
        </Container>
    );
}

export default AppLayout()(Home);