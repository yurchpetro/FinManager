export interface AuthLoginResponseModel {
    kind: string;
    users: [
        {
            localId: string;
            email: string;
            passwordHash: string;
            emailVerified: boolean;
            passwordUpdatedAt: number;
            providerUserInfo: [
                {
                    providerId: string;
                    federatedId: string;
                    email: string;
                    rawId: string;
                },
            ];
            validSince: string;
            disabled: boolean;
            lastLoginAt: string;
            createdAt: string;
            lastRefreshAt: string;
        },
    ];
}
