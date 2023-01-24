import React from 'react'

function Array(){


    let employee = [
{
    name: "Veera",
    age:29,
    marks:300,
    city:"atp"
},
{
    name: "Rammeh",
    age:32,
    marks:425,
    city:"hyd"
},
{
    name: "Siva",
    age:30,
    marks:510,
    city:"Bng"
},
{
    name: "Ramu",
    age:35,
    marks:510,
    city:"Mumbai"
},
{
    name: "Veera",
    age:29,
    marks:300,
    city:"atp"
},
{
    name: "Mahesh",
    age:40,
    marks:660,
    city:"hyd"
},
{
    name: "Prasad",
    age:28,
    marks:720,
    city:"Bng"
},
{
    name: "Sreedhar",
    age:27,
    marks:810,
    city:"atp"
},
{
    name: "Radha",
    age:25,
    marks:740,
    city:"atp"
},
{
    name: "Hari",
    age:28,
    marks:840,
    city:"Bng"
}

    ]

   
  
     const result = employee.map(employee =>{
        if(employee.marks >= 800){
            employee.grade = "A"
            return  employee
        }
        else if(employee.marks >= 600 && employee.marks <= 800){
          employee.grade = "B"
          return employee
        }
        else if(employee.marks >= 500 && employee.marks <= 600){
            employee.grade ="C"
            return employee
        }
        else{
            employee.grade ="D"
            return employee
        }
     } )

     const age = employee.filter((employee) => 
     {
        if(employee.age >= 30 && employee.age<=35){
            return true
        }
     }
     )

     console.log(age);
     
     const marks = employee.filter((employee) =>{
         if(employee.marks >= 400 && employee.marks <=800){
             return true
         }
     })
     
     console.log(marks);



//     .map(employee => `${employee}`);

 ///console.log(result);

     return(
        <div>
        {result.map((employee) => 
          <div>
              {employee.name} <br/>
              {employee.marks} <br/>
              Grade :{employee.grade}
              <hr/>
          </div>
         
        )}
      </div>
     )
 }
export default Array;