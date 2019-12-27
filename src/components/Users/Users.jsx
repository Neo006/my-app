import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user-logo.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className="col-md-10">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>

                    {
                        pages.map(p => {
                            return <li className={`page-item ${props.currentPage === p && 'active'}`}>
                                <a onClick={() => {
                                    props.onPageChanged(p)
                                }} className="page-link" href="#">{p}</a>
                            </li>
                        })
                    }

                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {
                props.users.map(u => (
                    <div key={u.id}>
                        <div className="row">
                            <div className="col-md-2 text-center mb-4">
                                <NavLink to={'/profile/' + u.id} className={styles.avatarBlock}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                </NavLink>
                                <div className="mt-1">
                                    {
                                        u.followed
                                            ? <button onClick={() => {
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '9ad26d7d-93fb-4b1e-891a-6d40f3d93505'
                                                    }
                                                })
                                                    .then(response => {
                                                        if (response.data.resultCode == 0) {
                                                            props.unfollow(u.id);
                                                        }
                                                    });
                                            }} className="btn btn-success">Unfollow</button>
                                            : <button onClick={() => {
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '9ad26d7d-93fb-4b1e-891a-6d40f3d93505'
                                                    }
                                                })
                                                    .then(response => {
                                                        if (response.data.resultCode == 0) {
                                                            props.follow(u.id);
                                                        }
                                                    });
                                            }} className="btn btn-success">Follow</button>
                                    }

                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div>{u.name}</div>
                                        <div>{u.status}</div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>{'u.location.country'}</div>
                                        <div>{'u.location.city'}</div>
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