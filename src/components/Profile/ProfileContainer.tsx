import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type PropsProfileType = {
    setUserProfileAC: (profile: any) => void
    profile: any
}
type MapStatePropsType = {
    profile: any
}
// type mapDispatchPropsType = {
//     setUserProfile: (profile: any) => void
// }

class ProfileContainer extends React.Component<PropsProfileType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
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

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)
