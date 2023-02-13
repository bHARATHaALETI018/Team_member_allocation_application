const Footer = ()=>{
    const today = new Date();
    return(
        <footer className="footerContainer">
            <div style={{
                textTransform:'capitalize', position:'fixed', bottom:'0'
            }}>
                <h4>
                    team member allocation app - {today.getFullYear()}
                </h4>
            </div>
        </footer>
    )
}

export default Footer;