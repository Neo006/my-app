import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user-logo.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../redux/users-reducer";

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
                                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                                props.unfollow(u.id)}} className="btn btn-success">
                                                Unfollow</button>
                                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                                props.follow(u.id) }} className="btn btn-success">
                                                Follow</button>
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