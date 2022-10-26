import {useState, useError, useOutletContext} from "react-router-dom"


const Tester = () => {
    const contextInfo = useOutletContext()
    const contextInfoSpecific = contextInfo[0]
    const inputValue = contextInfo[1].toUpperCase()

    const inputValueCopy = contextInfoSpecific
    const filt = (event) => {
        if(event.name.includes(inputValue) || event.age.toUpperCase().includes(inputValue) || event.username.toUpperCase().includes(inputValue) || event.email.toUpperCase().includes(inputValue)){
            return true
        }
    }
    return(
        <div className = "holder">
            {inputValueCopy.filter(filt).map((event)=> {
                return (<div className = "infoContainers">
                    <div className="inner">Name: {event.name}</div>
                    <div className="inner">Age :{event.age}</div>
                    <div className="inner">UserName: {event.username}</div>
                    <div className="inner">Email: {event.email}</div>
                </div>)
            })}
            {console.log(inputValue)}
        </div>
    )
}

export default Tester
