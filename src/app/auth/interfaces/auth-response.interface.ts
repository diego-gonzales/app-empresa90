// Generated by https://quicktype.io

export interface AuthResponse {
    code:          number;
    auth_token:    string;
    refresh_token: string;
    user:          string;
}

// Generated by https://quicktype.io

export interface RefreshTokenResponse {
    code:  number;
    token: string;
}