import './Employee.css'
import male from './images/male.jpg'
import female from './images/female.jpg'

const Employees = ({employees, selectedTeam, handelCardSelection, handelTeamSelection})=>{

    
return (
<main className='container'>
  <div className='justify-content-center'>
    <div className='selectTeam'>
      <select value={selectedTeam} onChange={handelTeamSelection}>
        <option value='TeamA'>TeamA</option>
        <option value='TeamB'>TeamB</option>
        <option value='TeamC'>TeamC</option>
        <option value='TeamD'>TeamD</option>
      </select>
    </div>

  </div>
  <div className='B'>
    <div className='justify-content-center'>
      <div className='cards_container'>
        {
          employees.map((employee)=>(
            <div id={employee.id} className={(employee.teamName === selectedTeam? 'card standout' : 'card')} style={{cursor:'pointer'}}  onClick={handelCardSelection}>

              {(employee.gender==='male')?<img src={male} alt='Male Profile'  style={{cursor:'pointer'}}/> : <img 
              src={female} alt='Female Profile'  style={{cursor:'pointer'}}/>}

              <div className='card_details'>
                  <p><b>Name : {employee.fullName}</b> <br></br>
                  Gender : {employee.gender} <br></br> Designation : {employee.designation}<br></br>Id : {employee.id}</p>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  </div>
</main>
);
}

export default Employees