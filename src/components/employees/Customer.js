import { Link } from "react-router-dom"

export const Customer = ({id,fullName,address,phoneNumber}) => {
    //parent info from cutomerlist
    return <section className="Customer">
                <div>
                    <Link to={`/Customers/${id}`}>Name: {fullName}</Link>
                    </div>
                <div>Address: {address} </div>
                <div>PhoneNumber: {phoneNumber} </div>
            </section>
}