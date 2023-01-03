import React from 'react';

type StatusPropsType = {
    status: string
}

export const ProfileStatus = (props: StatusPropsType) => {
    return (
        <>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status} placeholder={'Enter status'}/>
            </div>
        </>
    );
};

