//Selector used to remap store state into an object to make code cleaner.
//It can also be used to connect store's state to component props. (See PageContent Component)
export function stateSelector(state) {
    return {
        users: state.user.users,
        error: state.user.error,
        isLoading: state.user.isLoading,
        counter: state.counter.counter
    }
}
