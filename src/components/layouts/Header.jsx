import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            padding={'1rem'}
            bgcolor={'#FFAF45'}
            color={'white'}
        >
            <Typography variant="h4" fontWeight={700}>
                <Link 
                    to={'/'}
                    style={{ 
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    JwellPDF
                </Link>
            </Typography>
        </Stack>
    );
}

export default Header;