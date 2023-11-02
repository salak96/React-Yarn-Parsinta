import { atom } from 'recoil';

const authenticated = atom({
    key: 'authenticated',
    default: {
        check: false,
        user: { name: 'Lambang' },
    },
});

export { authenticated };
