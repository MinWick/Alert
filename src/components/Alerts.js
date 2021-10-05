const ShowAlert = ({height,width,colorFond,textColor,texto}) => {
        
    return (
        <div>
            <br />
            <br />
            <div style={{
                height: height,
                width:width,
                background:colorFond, 
                color:textColor,
                borderRadius:'7px',
                padding: '10px 20px',
                margin:'0px'
            }}>
                {texto}
            </div>
        </div>

    )
}
export {
    ShowAlert
};



