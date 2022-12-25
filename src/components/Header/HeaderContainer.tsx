import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

// type MapStateToProps = {
//     isAuth: boolean
//     login: string
// }
// type MapDispatchToPropsType = {
//     setAuthUserDataAC: (id: string, email: string, login: string) => void
// }

type HeaderPropsType = {
    isAuth: boolean
    login: string
    getAuthUserData: () => void

}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
        // authAPI.me()
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             const {id, email, login} = response.data.data
        //             this.props.setAuthUserDataAC(id, email, login)
        //         }
        //     })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)