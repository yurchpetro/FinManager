export interface EnvironmentModel {
    production: boolean;
    firebase: {
        apiKey: string;
        authDomain: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
        databaseURL: string;
        locationId: string;
    };
}
