import React from 'react';
import s from './Paginator.module.css';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    setCurrentPage: (currentPage: number) => void
}

export const Paginator = (props: UsersPropsType) => {
    const {totalUsersCount, pageSize} = props
    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((el: number, index: number) => {
                return <span key={index} onClick={() => {
                    props.onPageChanged(el)
                    props.setCurrentPage(el)
                }} className={props.currentPage === el ? s.selectedPage : ''}>{el}</span>
            })}
        </div>
    )
}