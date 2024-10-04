import {Box, InputBase, styled} from "@mui/material";

const Component = styled(Box)({
    background : "#F6F6F6",
    '& > div' : {
        margin : 12
    }
})

const BreadCrumb = ({setText, setNumber}) => {
    return(
        <Component >
            <InputBase placeholder = "Find your Images"
             onChange = {(e) => setText(e.target.value)}
            />
            <InputBase placeholder = "Number of Images" 
             type = "number"
             onChange = {(e) => setNumber(e.target.value)}
            />
            
        </Component >
    );
}
export default BreadCrumb;