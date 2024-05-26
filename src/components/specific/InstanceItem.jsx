import { LaunchRounded as RedirectIcon } from '@mui/icons-material';
import { Button, Grid } from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const InstanceItem = ({ name, _id }) => {
    const navigate = useNavigate();

    return (
        <Grid item>
            <Button variant="outlined" color="secondary" endIcon={<RedirectIcon />} onClick={() => navigate(`/instance/${_id}`)}>
                {name}
            </Button>
        </Grid>
    );
}

export default memo(InstanceItem);