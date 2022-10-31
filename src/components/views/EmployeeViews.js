import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../../profile/Profile"
import { CustomerDetails } from "../employees/CustomerDetails"
import { CustomerList } from "../employees/CustomerList"
import { EmployeeDetails } from "../employees/EmployeeDetails"
import { EmployeeList } from "../employees/EmployeeList"
import { TicketContainer } from "../tickets/TicketContainer"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={<TicketContainer />} />
                <Route path="employees" element={<EmployeeList />} />
                <Route path="customers" element={<CustomerList />} />
                <Route path="profile" element={<Profile /> } />
                <Route path="employees/:employeeId" element={<EmployeeDetails/>} />
                <Route path="customers/:customerId" element={<CustomerDetails/>} />
            </Route>
        </Routes>
    )
}