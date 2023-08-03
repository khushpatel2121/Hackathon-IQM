import React, { useEffect , useState} from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app  from '../../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(143, 142, 142, 0.42);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
`


const Wrapper = styled.div`
    height: 95vh;
    width: 50vw;
    background-color:#E5E5DB;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

`

const Title = styled.h1`
    font-size: 30px;
    font-weight: 900;
    color: #6d99ef;
    text-align: center;

    `
const BTitle = styled.h3`
    font-size: 20px;
    font-weight: 900;
    color: #6d99ef;
    text-align: center;

`
const Input = styled.input`
    border: 1px solid gray;
    outline: none;
    padding: 10px;
  

`
const Selector = styled.select`

`
const Option = styled.option`

`

const Button = styled.button`
border: none;
background-color:#6d99ef;
color: white;
padding: 15px;
margin: 10px;

`
const Cross = styled.div`
position: absolute;
top: 20px; 
right: 20px;
`



const Popup = ({open}) => {

    const [img,setImg] = useState(undefined);
    const [imgPerc,setImgPerc] = useState(0);
    const [inputs,setInputs] = useState({});
    const [price,setPrice] = useState("");

    

    const handleChange = (e)=>{
        setInputs((prev)=>{
            return {...prev,[e.target.name]:e.target.value }
        })
        
    }

    console.log(inputs);

    const uploadFile = async (file,fileType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage , fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    fileType && setImgPerc(Math.round(progress))
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
            break;
    }
  }, 
  (error) => {},
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setInputs((prev)=>{
            return {...prev,[fileType]:downloadURL }
        })
        
      console.log('File available at', downloadURL);
    });
  }
    )}

    useEffect(()=>{
     img && uploadFile(img, 'image');
    },[img])

    const navigate = useNavigate();


    const addBook = async ()=>{

      try{
        await axios.post('http://localhost:8080/api/book',{...inputs});
        
        navigate("/")
      }catch(err){
          console.log(err);
     
    }
  }

    console.log(inputs);
    console.log(price);
 

  return (
     <Container>
     <Wrapper>
            <Cross  onClick={(e)=>open(false)}>
                <CloseIcon />
            </Cross>
            <Title>Add new Book</Title>
            <BTitle>Book Name</BTitle>
            <Input placeholder="Book Name"  name='title'    onChange={handleChange}/>
            <BTitle>Book Image</BTitle>
          {  imgPerc > 0 ? (<>
           { imgPerc == 100?(<>Upload Done</>) :(<>Progress : {imgPerc}%
            <progress value={imgPerc} max="100" /></>)}
          </>):
          (<Input type='file' accept='image/*' onChange={e=>setImg(e.target.files[0])} />)}
            <BTitle>Author Name</BTitle>
            <Input placeholder="Author Name"  name='author'    onChange={handleChange}/>
            <BTitle>Book Genre</BTitle>
            <Input placeholder="Genre"  name='genre' onChange={handleChange}/>
            <BTitle>Book Description</BTitle>
            <Input placeholder="Description" name='description'    onChange={handleChange}/>
            <BTitle>Book Price</BTitle>
            <Input placeholder="₹"   min="1" name='price' onChange={handleChange} />
           <Button onClick={addBook}>
            Add Book
           </Button>
     </Wrapper>

     </Container>
  )
}

export default Popup
