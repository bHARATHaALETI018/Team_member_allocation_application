const Header = ({selectedTeam, teamMemberCount})=>{
    return ( 
        <header style={{backgroundColor:'teal', position: 'fixed',left:'0', top:'20%', left:'5%', width:'20%', height:'60%' ,  textAlign:'center', borderRadius:'15px'}}>
            <h1 style={{textTransform: 'capitalize'}}> team member allocation app</h1>
            <h2>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1?"member":"members"}</h2>
        </header>
    );
}

export default Header;