import React from 'react';
// import {InitialStateType, UserType} from "../../redux/users-reducer";
// import s from './Users.module.css'
// import axios from "axios";
// import userPhoto from '../../assets/images/avatar.png'
//
// type PropsUsersType = {
//     usersPage: InitialStateType
//     follow: (userId: number) => void
//     unFollow: (userId: number) => void
//     setUsers: (users: UserType[]) => void
// }
// export const Users = (props: PropsUsersType) => {
//     const getUsers = () => {
//         if (props.usersPage.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//                 props.setUsers(response.data.items)
//             })
//             // props.setUsers([
//             //     {
//             //         id: 1,
//             //         photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg',
//             //         followed: true,
//             //         fullName: 'Kiri1111',
//             //         status: 'I am first',
//             //         location: {city: 'Minsk', country: 'Belarus'}
//             //     },
//             //     {
//             //         id: 2,
//             //         photoUrl: 'https://topmsg.ru/wp-content/uploads/anonymous.jpg',
//             //         followed: true,
//             //         fullName: 'Georgy',
//             //         status: 'I am second',
//             //         location: {city: 'Minsk', country: 'Belarus'}
//             //     },
//             //     {
//             //         id: 3,
//             //         followed: false,
//             //         photoUrl: 'http://android-obzor.com/wp-content/uploads/2022/04/1-80.jpg',
//             //         fullName: 'Alex',
//             //         status: 'I am late)',
//             //         location: {city: 'Moscow', country: 'Russia'}
//             //     }])
//         }
//     }
//
//     return (
//         <>
//             <button onClick={getUsers}>Get users</button>
//             <div>
//                 {props.usersPage.users.map(el =>
//
//                     <div key={el.id}>
//                 <span>
//                     <div>
//                         <img alt={'img avatar'} className={s.userPhoto}
//                              src={el.photos.small != null ? el.photos.small : userPhoto}/>
//                     </div>
//                     <div>
//                         {el.followed
//                             ? <button onClick={() => props.unFollow(el.id)}>unFollow</button>
//                             : <button onClick={() => props.follow(el.id)}>Follow</button>}
//
//                     </div>
//                 </span>
//                         <span>
//                     <span>
//                         <div>{el.name}</div>
//                         <div>{el.status}</div>
//                     </span>
//                     <span>
//                         <div>{'el.location.city'}</div>
//                         <div>{'el.location.country'}</div>
//                     </span>
//                 </span>
//                     </div>)}
//             </div>
//         </>
//     );
// };
//
