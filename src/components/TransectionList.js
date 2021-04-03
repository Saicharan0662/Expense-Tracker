import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransectionList = () => {
    const { transactions } = useContext(GlobalContext);

    useEffect(() => {
        localStorage.setItem("money", JSON.stringify(transactions))
    })
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (<Transaction transaction={transaction} key={Transaction.id} />))}
            </ul>
        </>
    )
}
