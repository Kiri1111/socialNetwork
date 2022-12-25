import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType
type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        // getProfile(userId)
        //     .then(response => {
        //         this.props.setUserProfileAC(response.data)
        //     })
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
//     return {
//         setUserProfile: (profile: any) => {
//             dispatch(setUserProfileAC(profile))
//         }
//     }
// }

const WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
