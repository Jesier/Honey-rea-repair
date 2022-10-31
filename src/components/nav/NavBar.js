import { CustomerNavBar } from "./CustomerNav"
import { EmployeeNavBar } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
	
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
    
    
        if (honeyUserObject.staff) {
            //empolyee views
            return <EmployeeNavBar />
        } else {
            //customer views
            return <CustomerNavBar />
        }
    
}