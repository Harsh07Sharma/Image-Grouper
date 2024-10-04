import {Card,styled} from "@mui/material"

const Component = styled('img')({
    height : 200,
    width : "100%",
    objectFit : "cover"
})

const Image = ({image}) => {
    return(
        <Card>
            <Component src = {image.largeImageURL} alt = "image"/>
        </Card>
    )
}
export default Image;