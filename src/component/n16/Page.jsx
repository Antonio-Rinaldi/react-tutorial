import React from "react";
import {useFetchUsers} from "./hook/useFetchUsers";
import PageContent from "./PageContent";


export default function Page() {
    const {error, isLoading} = useFetchUsers();
    return isLoading
        ? <p>Loading...</p>
        : error
            ? <p>Error: '{error}'</p>
            : <PageContent/>
}
