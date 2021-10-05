import user from './image/user2.jpg'
const Avatar = (/*{ img=`user.png` }*/) =>{

    //const image = img == "" ? Avatar:image

    return(
<div style={{
    width:'49px',
    height:'49px',
    marginTop:'5px'
   // image:`${image}`
}}>
<img src={user} alt="" style={{
    borderRadius:'50%',
    width:'75px',
    height:'75px',
   marginTop:'25px',
   marginLeft:'25px'
}}/>



</div>
    );

}

export {
    Avatar
}
