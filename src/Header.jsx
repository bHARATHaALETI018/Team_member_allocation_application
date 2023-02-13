const Header = ({selectedTeam, teamMemberCount})=>{
    return ( 
        <header style={{position: 'fixed',left:'0', width:'20%' ,  textAlign:'center'}}>
            <h1 style={{textTransform: 'capitalize'}}> team member allocation app</h1>
            <h2>{selectedTeam} has {teamMemberCount} members</h2>
        </header>
    );
}

export default Header;