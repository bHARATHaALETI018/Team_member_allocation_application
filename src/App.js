import Header from './Header';
import Employees from './employees';
import Footer from './footer'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import empList from './employess_list'
import Nav from './nav';
import about from './about'

function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB');
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || {empList});



  useEffect(()=>{
      localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  useEffect(()=>{
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handelTeamSelection(event){
    console.log(event.target.value);
    setTeam(event.target.value);
  }

  function handelCardSelection(event){
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)?(employee.teamName === selectedTeam)?{...employee, teamName:''} : {...employee, teamName:selectedTeam} : employee);
    setEmployees(transformedEmployees); 
  }











  return (
    <Router>
      <div className='MainContainer' style={{ boxSizing:'border-box', width:'100%', display:'flex' , FlexDirection:"column", margin:'3%',backgroundColor:'red' , overflowX:'hidden', msOverflowY:'auto', scrollBehavior:'smooth', WebkitOverflowScrolling: 'touch'}}>
        <Nav/>
        <Header selectedTeam={selectedTeam} teamMemberCount = {employees.filter((employee) => employee.teamName === selectedTeam).length}/>
        <Routes>
          <Route path='/' element={<Employees employees={employees} selectedTeam={selectedTeam} handelCardSelection={handelCardSelection} handelTeamSelection={handelTeamSelection} />}> </Route>
          <Route path="/about" element={<about />}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
