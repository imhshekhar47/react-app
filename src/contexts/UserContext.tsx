import React from 'react';

interface UserDetails {
    username?: string,
}

export const defaultUserDetails: UserDetails = {}

export const UserContext = React.createContext<UserDetails>(defaultUserDetails);

