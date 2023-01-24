import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: StatusPropsType) => {
    const [editeMode, setEditeMode] = useState(false)
    const [value, setValue] = useState(props.status)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onClickHandler = () => {
        setEditeMode(true)
        setValue('')
    }

    const onBlurHandler = () => {
        if (value.trim() !== "")
            setEditeMode(false)
        props.updateStatus(value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (value.trim() !== "")
            if (e.charCode === 13) {
                setEditeMode(false)
                props.updateStatus(value)
            }
    }
    return (
        <>
            {
                !editeMode
                    ? <div>
                        <h3 onClick={onClickHandler}>My today
                            status: {props.status ? props.status : 'Status empty, click here for add new status'}
                        </h3>
                    </div>
                    : <div>
                        <input onBlur={onBlurHandler} onChange={onChangeHandler} value={value}
                               placeholder={'Enter your status'} onKeyPress={onKeyPressHandler} autoFocus={true}/>
                    </div>
            }
        </>
    );
};

