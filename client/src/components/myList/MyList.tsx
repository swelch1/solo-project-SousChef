import React from 'react'
import { useAppSelector } from '../../app/hooks'

const MyList = () => {
  const myItems = useAppSelector(state => state.myList)
  
  return (
    <div>
      {
        myItems
        ? myItems.map(item => <div key={String(item._id)}>{item.label}</div>)
        : <div />
      }
    </div>
  )
}

export default MyList
