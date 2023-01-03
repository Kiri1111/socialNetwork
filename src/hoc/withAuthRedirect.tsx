import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {MapStatePropsTypeRedirect} from "../components/Profile/ProfileContainer";

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsTypeRedirect => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            let {isAuth, ...restProps} = this.props

            if (!isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}