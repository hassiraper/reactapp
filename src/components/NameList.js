import React from 'react'
import Person from './Person'

function NameList() {
    const Names = ['Bruce','Clark','Diana','Bruce']
    const persons=[
        {
            id: 1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:28,
            skill:'Vue'
        }
    ]
    const namesList= Names.map((name,index) =><h2 key={index}>{name}</h2>)
    return <div>{namesList}</div>
}

export default NameList
