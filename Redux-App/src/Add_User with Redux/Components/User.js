import React from 'react'
import {useSelector , useDispatch} from 'react-redux'

function User() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    console.log(user)
    return (
        <div>
          {
              user ? user.map(user => (
                <div className="row" key={user.id}>
                <div className="name">{user.name}</div>
                <div className="address">{user.address}</div>
                <div className="user-btn">
                <button className="btn btn-danger" onClick={() => dispatch({type: 'DELETE_USER', id: user.id})}>Delete</button>
                </div>
                </div>
              )) : ''
          }
        </div>
    )

}

export default User
