import { of } from 'rxjs';

export const angularFireDatabaseStub = {
    object: () => ({
        update: () => { }
    })
};

export const angularFireAuthStub = {
    auth: {
        signInWithRedirect: () => { },
        signOut: () => { }
    }
};

export const authServiceStub = {
    user$: of('Reggie'),
}