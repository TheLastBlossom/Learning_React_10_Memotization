import React, { useEffect, useState } from 'react'

export const Employees = React.memo(
    ({ page, message }) => {        
        const [employees, setEmployees] = useState([]);
        // const [page, setPage ] = useState([]);
        const getUsers = async () => {
            // console.log("Making https request");
            const url = `https://reqres.in/api/users?page=${page}`;
            const request = await fetch(url);
            const { data } = await request.json();
            setEmployees(data);
        }
        useEffect(() => {
            getUsers();
            message();
            console.log("Employees created");
        }, [page]);
        return (

            <div>
                {employees.length > 0 &&
                    <>
                        <h2>Employees from page {page}</h2>
                        <ul>
                            {employees.map(employee => {
                                return (
                                    <li key={employee.id}>{`${employee.first_name} ${employee.last_name}`}</li>
                                )
                            })}
                        </ul>
                    </>
                }
            </div>
        )
    }
)
