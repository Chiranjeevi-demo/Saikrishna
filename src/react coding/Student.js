import React from 'react'

function Student(){

    let student = [
        {
            name: "Veera",
            sub: {
                telugu:70,
                math: 95,
                eng: 90,
                science: 99
            }
        },
        {
            name: "Ramesh",
            sub:{
                telugu:80,
                math: 80,
                eng: 70,
                science: 60
            }
        },
        {
            name: "Raju",
            sub:{
                telugu:30,
                math:40,
                eng:15,
                science:5
            }
        },
        {
            name: "Rajesh",
            sub:{
                telugu:40,
                math:71,
                eng:29,
                science:38
            }
        },
        {
            name: "Ramu",
            sub:{
                telugu:30,
                math:76,
                eng:55,
                science:35
            }
        }
    ]

    const result = student.map(student1 => {
        student1.totalmarks = Object.values(student1.sub).reduce((a,b) =>(a+b))
        student1.avg = student1.totalmarks / 4;

        if(student1.totalmarks >= 300 &&  student1.totalmarks<=400){
            student1.grade ="A"
        }
        else if(student1.totalmarks >= 150 &&  student1.totalmarks<=200){
            student1.grade ="B"
        }
        else if(student1.totalmarks >= 150 &&  student1.totalmarks<=200){
            student1.grade ="Failed"
        }

         return  student1
        //console.log(student1)
        //console.log(Object.values(student.sub))
        })
    console.log(result)

    const marks = result.filter((result1) =>{
        if(result1.totalmarks >= 300 ){
            return true
        }
    })
    console.log(marks);

    var city = {
        village: "anantapur",
        mandal : "raaptthadu",
        pincode: 515641
    }
    city.name =["veera", {name:"abc", age:20,  city:"atp", company:{ id:2, sal:112345} } , "ramu", [11,44,77,{age:22, name:"Ravi", mob:3323123121}]]
    ///city.pincode = 515642;
    city.address = {
        city:"Atp",
        mandal:"attp1"
    }

    console.log(city.name[1].company.sal);
    //console.log(city.name[3][3]["mob"]);
    //console.log(city.name[3][3].mob);

    // student.forEach(student => {
    //     result.push({
    //         name: student.name,
    //         totalmarks: Object.values(student.sub).reduce((a, b) => (a + b)),
    //         avgmarks: Object.values(student.sub).reduce((a, b) => (a + b) / 4)

    //     })
    // });
    // console.log(result) 
      
    // .map(result =>{
    //     if(result.marks >= 300 &&  result.marks<=400){
    //         result.marks ="A"
    //     }
    //     else if(result.marks >= 100 &&  result.marks<=200){
    //         result.marks ="C"
    //     }
    // })

    return(
        <div>
         <h1> Student Marks </h1>
        </div>
    )
}
export default Student;
 