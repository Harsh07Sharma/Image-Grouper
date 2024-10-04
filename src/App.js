import {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import BreadCrumb from "./components/BreadCrumb";
import Images from "./components/Images";
import {getImages} from "./services/Api";
import SnackBar from "./components/SnackBar";


function App() {

const [text,setText] = useState('');
const [number,setNumber] = useState(6);
const [data,setData] = useState([]);
const [open,setOpen] = useState(false);

useEffect(() => {
 if(number < 3 || number > 200){
  setOpen(true);
   return;
 }
 setOpen(false);
 const getData = async () => {
  const res = await getImages(text,number);
  setData(res.data.hits);
 }
 getData();

},[text,number]);

  return (
   <div>
     <Navbar />
     <BreadCrumb setText = {setText} setNumber = {setNumber} />
     <Images data = {data} />
     <SnackBar open = {open} setOpen = {setOpen} />
   </div>
  );
}

export default App;
