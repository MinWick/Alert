const ShowAlert = ({height,width,colorFond,textColor,texto}) => {
        
    return (
        <div>
            <div style={{
                height: height,
                width:width,
                background:colorFond, 
                color:textColor,
                borderRadius:'3px',
                padding: '5px 50px',
                margin:'15px'
            }}>
                {texto}
            </div>
        </div>

    )
}
export {
    ShowAlert
};



