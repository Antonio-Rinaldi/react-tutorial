import React from "react";
import useFetchUsers from "./hook/useFetchUsers";
import UserTable from "./UserTable";

export default function Users() {

    const {users, error, isLoading} = useFetchUsers();
    return isLoading
        ? <p>Loading...</p>
        : error
            ? <p>Error: '{error}'</p>
            : <UserTable users={users}/>;
}
