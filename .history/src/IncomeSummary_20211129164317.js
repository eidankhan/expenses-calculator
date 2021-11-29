import React, { useEffect, useState } from 'react'

export const IncomeSummary = () => {

    const [income, setIncome] = useState([]);

    useEffect(() => {
        setIncome([
            {
                date: "11/01/2021",
                amount: 55000,
                payer: "Employer",
                description: "Salary received for the month of November"
            }
        ])
    }, [])



    return (
        <div>
            
        </div>
    )
}
