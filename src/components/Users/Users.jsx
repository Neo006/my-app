import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-logo.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div className="col-md-10">
                {
                    this.props.users.map( u => (
                        <div key={u.id}>
                            <div className="row">
                                <div className="col-md-2 text-center mb-4">
                                    <div className={styles.avatarBlock}>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    </div>
                                    <div className="mt-1">
                                        {
                                            u.followed
                                                ? <button onClick={()=>{this.props.unfollow(u.id)}} className="btn btn-success">Unfollow</button>
                                                : <button onClick={()=>{this.props.follow(u.id)}} className="btn btn-success">Follow</button>
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
}

export default Users;