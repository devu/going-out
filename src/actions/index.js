let index = 0

export function selectUser(user, users){
    return {
        type: 'SELECT_USER',
        users: users,
        user: user
    }
}