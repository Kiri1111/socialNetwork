import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps} from "react-router";

type MapStateToProps = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    setAuthUserDataAC: (id: string, email: string, login: string) => void
}

type OwnPropsType = MapStateToProps & MapDispatchToPropsType

class HeaderContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    this.props.setAuthUserDataAC(id, email, login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)