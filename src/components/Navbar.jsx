import { AppBar, Toolbar, Typography, styled, IconButton } from "@mui/material";
import { CenterFocusWeak, Menu } from '@mui/icons-material';

const Top = styled(AppBar)`
   background: linear-gradient(135deg, #A50303, #C72A2A);
`;

const Title = styled(Typography)`
   font-family: "Lato", "Tofu", sans-serif;
   font-weight: bold;
   font-size: 1.8rem;
   margin-left: 10px;
   color: white;

   &:hover {
       text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
   }
`;

const Navbar = () => {
    return (
        <Top position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <CenterFocusWeak sx={{ color: "white", mr: 1 }} />
                <Title variant="h5">Image Grouper</Title>
            </Toolbar>
        </Top>
    );
}

export default Navbar;
