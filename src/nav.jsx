import {Link} from 'react-router-dom'

const Nav = ()=>{
    return (
        <div className="container" style={{ backgroundColor:'violet', width:'100%', top:'0', position:"fixed", zIndex:'1', cursor:'pointer', borderRadius:'18px'}}>
            <div className="main">
            <ul className="items" style={{display:'flex',
                                        flexDirection:'row', listStyleType:"none", gap:'18px', justifyContent:'center', alignItems:'center', textDecoration:'none' }}>
                    <li><Link className="Link" to="/">Home</Link></li> 
                    <li><Link className="link" to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;