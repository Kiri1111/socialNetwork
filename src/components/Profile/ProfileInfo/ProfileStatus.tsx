import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type StatusPropsType = {}

export const ProfileStatus = (props: StatusPropsType) => {
    const [editeMode, setEditeMode] = useState(false)
    const [value, setValue] = useState('Press twice to change status')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onDoubleClickHandler = () => {
        setEditeMode(true)
        setValue('')
    }

    const onBlurHandler = () => {
        if (value.trim() !== "")
            setEditeMode(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (value.trim() !== "")
            if (e.charCode === 13) {
                setEditeMode(false)
            }
    }
    return (
        <>
            {
                !editeMode
                    ? <div>
                        <h3 onDoubleClick={onDoubleClickHandler}>{value}</h3>
                    </div>
                    : <div>
                        <input autoFocus onBlur={onBlurHandler} onChange={onChangeHandler} value={value}
                               placeholder={'Enter your status'} onKeyPress={onKeyPressHandler}/>
                    </div>
            }


        </>
    );
};

