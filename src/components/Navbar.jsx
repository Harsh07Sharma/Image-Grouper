import {AppBar, Toolbar, Typography, styled} from "@mui/material";
import {CenterFocusWeak} from '@mui/icons-material';

const Top = styled(AppBar)`
   background : #A50303;
   `
const Text = styled(Typography)`
   font-family:   "Lato variant8", Tofu;
   `
const Navbar = () => {
    return(
        <Top position = 'static'>
            <Toolbar>
                <CenterFocusWeak />
                <Text variant = "h5">Image Grouper</Text>
            </Toolbar>
        </Top>
    );
}

export default Navbar;