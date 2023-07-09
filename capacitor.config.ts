import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.finmanager',
    appName: 'FinManager',
    webDir: 'dist/fin-manager',
    server: {
        androidScheme: 'https',
    },
};

export default config;
