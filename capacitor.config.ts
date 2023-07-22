import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.manager.fin',
    appName: 'Fin Manager',
    webDir: 'dist/fin-manager',
    server: {
        androidScheme: 'https',
    },
};

export default config;
