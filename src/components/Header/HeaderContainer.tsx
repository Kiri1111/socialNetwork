import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
//
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
    logOut: () => void
}

class HeaderContainer extends React.Component<HeaderPropsType> {


    render() {
        return <Header logOut={this.props.logOut} isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {logOut})(HeaderContainer)