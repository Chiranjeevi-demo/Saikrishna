import React from 'react'

export default function Jscode() {

    function checkStringsAnagram(a, b) {
        let len1 = a.length;
        let len2 = b.length;
        if(len1 !== len2){
            return('Invalid Input');
            
           
        }
        let str1 = a.split('').sort().join('');
        let str2 = b.split('').sort().join('');
        if(str1 === str2){
            return("True");
        } else { 
          return("False");
        }
     }
     
  return (
    <div>
        <div> {checkStringsAnagram("army","mary")} </div>
    </div>
  )
}
