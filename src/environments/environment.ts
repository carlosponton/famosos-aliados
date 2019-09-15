// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDToRr0lgjxxTL8x43hkgSxZwHyzUXm9Ls',
        authDomain: 'famosos-dev.firebaseapp.com',
        databaseURL: 'https://famosos-dev.firebaseio.com',
        projectId: 'famosos-dev',
        storageBucket: 'famosos-dev.appspot.com',
        messagingSenderId: '617643345116',
        appId: '1:617643345116:web:8ad287c081657c897fe019'
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
