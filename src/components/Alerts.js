const ShowAlert = ({height,width,colorFond,textColor,texto}) => {
        
    return (
        <div>
            <div style={{
                height: height,
                width:width,
                background:colorFond, 
                color:textColor,
                borderRadius:'3px',
                
            }}>
                {texto}
            </div>
            <br />
        
        </div>

    )
}
export {
    ShowAlert
};



