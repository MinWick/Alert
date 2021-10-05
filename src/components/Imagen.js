import user from './image/user.png'
const Avatar = ({ img=`user.png` }) =>{

    const image = img === `user.png` ? 'user2.jpg' : 'user3.jpg'

    return(
<div style={{
    width:'49px',
    height:'49px',
    marginTop:'5px',
    image:`${image}`
}}>
<img src={user} alt="" style={{
    borderRadius:'50%',
    width:'50px',
    height:'50px',
   marginTop:'25px',
   marginLeft:'25px'
}}/>



</div>
    );

}

export {
    Avatar
}
