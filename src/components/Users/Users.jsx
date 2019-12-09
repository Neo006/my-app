import React from 'react';
import styles from './users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {id: 1, photoUrl: 'https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_19-512.png',
                    followed: true, fullName: 'Logan', status: 'I am a boss', location: {city: 'New York', country: 'USA'}},
                {id: 2, photoUrl: 'https://image.flaticon.com/icons/png/512/53/53176.png',
                    followed: false, fullName: 'Monica', status: 'I am a boss too', location: {city: 'Toronto', country: 'Canada'}},
                {id: 3, photoUrl: 'https://image.flaticon.com/icons/png/512/53/53176.png',
                    followed: true, fullName: 'Cameron', status: 'I am a boss too', location: {city: 'Los Angeles', country: 'USA'}}
            ]
        );
    }

    return (
        <div className="col-md-10">
            {
                props.users.map( u => (
                    <div key={u.id}>
                        <div className="row">
                            <div className="col-md-2 text-center mb-4">
                                <div className={styles.avatarBlock}>
                                    <img src={u.photoUrl}/>
                                </div>
                                <div className="mt-1">
                                    {
                                        u.followed
                                            ? <button onClick={()=>{props.unfollow(u.id)}} className="btn btn-success">Unfollow</button>
                                            : <button onClick={()=>{props.follow(u.id)}} className="btn btn-success">Follow</button>
                                    }

                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div>{u.fullName}</div>
                                        <div>{u.status}</div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>{u.location.country}</div>
                                        <div>{u.location.city}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;