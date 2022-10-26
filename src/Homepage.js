import react, {useState, useEffect} from "react"
import {Link, Outlet} from "react-router-dom"

const objectForm1 = [
    {
        name: "Alfredo",
        age: "15",
        username: " AlfredoLand1",
        email: " AlfredoBoom@email.com "
    },
    {
        name: "Alfred",
        age: "12",
        username: "Alfred2UrBatman",
        email: "ImBatman@email.com"
    },
    {
        name: " Person",
        age: " 233",
        username: "JustAPerson",
        email: "Person@email.com"
    },
    {
        name: " claire",
        age: " 21",
        username: "  Garretts Ex",
        email: " ClairW@email.com "
    },
    {
        name: " Garrett",
        age: " 22",
        username: " Gmoney",
        email: " garrett@email.com"
    },
    {
        name: " Person",
        age: " 233",
        username: "JustAPerson",
        email: "Person@email.com"
    },
    {
        name: " claire",
        age: " 21",
        username: "  Garretts Ex",
        email: " ClairW@email.com "
    },
    {
        name: " Garrett",
        age: " 22",
        username: " Gmoney",
        email: " garrett@email.com"
    },
    {
        name: "Alfredo",
        age: "15",
        username: " AlfredoLand1",
        email: " AlfredoBoom@email.com "
    },
    {
        name: "Alfred",
        age: "12",
        username: "Alfred2UrBatman",
        email: "ImBatman@email.com"
    },
    {
        name: " Person",
        age: " 233",
        username: "JustAPerson",
        email: "Person@email.com"
    },
    {
        name: " claire",
        age: " 21",
        username: "  Garretts Ex",
        email: " ClairW@email.com "
    },
    {
        name: " Garrett",
        age: " 22",
        username: " Gmoney",
        email: " garrett@email.com"
    },
    {
        name: " Person",
        age: " 233",
        username: "JustAPerson",
        email: "Person@email.com"
    },
    {
        name: " claire",
        age: " 21",
        username: "  Garretts Ex",
        email: " ClairW@email.com "
    },
    {
        name: " Garrett",
        age: " 22",
        username: " Gmoney",
        email: " garrett@email.com"
    }
]

const Header = () => {
    const [inputVal,setInputVal] = useState("")

    return ( <div>
        <nav className = "Navbar">
            <Link className = "NavbarInner" to = "/">HomePage</Link>
            <Link className = "NavbarInner"to = "/tester">Search Users</Link>
            <div className = "NavbarInnerInput" onSubmit = {null}>
            <input value = {inputVal} onChange = {(event)=> setInputVal(event.target.value)}/>
            </div>
        </nav>
            <div className = "contentContainer">
            <Outlet context = {[objectForm1,inputVal]}/>
            </div>
        </div>
    )
}

export default Header