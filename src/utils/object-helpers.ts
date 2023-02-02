export const followUnFollowHelper = (state: any, userId: any, followed: boolean) => {
    return {...state, users: state.usersPage.users.map((el: any) => el.id === userId ? {...el, followed} : el)}
}