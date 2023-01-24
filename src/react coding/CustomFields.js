import React from "react"
// import "./style.css"
export const InputField = ({type,placeholder,value, onChange, onBlur, ...rest})=>{
    const onChangeHandler =(e)=>{
        onChange(e)
    }
    const onBlurHandler =(e)=>{       
    }
    return(
        <input type={type} value={value} placeholder={placeholder} onChange={(e)=> onChangeHandler(e)} onBlur={(e)=> onBlurHandler(e)} {...rest}/>
    );
}
export const CheckBoxList = ({onChange, values=[],data=[],...rest})=>{
    console.log(values)
    const onChangeHandler =(ele)=>{
        if(values?.includes(ele)) {
            let ind = values.findIndex((e)=> ele === e)
            if(ind >= 0 )values.splice(ind,1)
        }else{
            values.push(ele)
        }
        onChange(values)
    }

    return(
    <div className="checkboxDiv">
        {
            data?.length > 0 && data.map((ele,ind)=>(
                <div className="checkboxParent">
                    <input type={"checkbox"} value={ele} key={ind} onChange={()=> onChangeHandler(ele)} {...rest}/>
                    <label>{ele}</label>
                </div>
            )
            )
        }
        </div>
        );
}

export const Button  = ({onClick,lable="", ...rest})=>{
    const onClickhandler =(e)=>{
        onClick(e)
    }
    return(
        <button onClick={onClickhandler} {...rest}>{lable}</button>
    );
}

export const Dropdown = ({onChange, values=[],data=[],...rest})=>{
    console.log(values)
    const onChnageHandler =(ele)=>{
      
        onChange(ele)
    }

    return(
    <select className="selectBox" onChange={onChnageHandler}>
        <option disabled></option>
        {
            data?.length > 0 && data.map((ele,ind)=>(
                <option value={ele}>{ele}</option>
            )
            )
        }
        </select>
        );
}