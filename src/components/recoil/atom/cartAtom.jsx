// import { atom } from 'recoil'




// export const cartAtom = atom({
//     key: 'cartAtom',
//     default: [],
//     effects_UNSTABLE: [
//         ({setSelf}) => {
//             const set = localStorage.getItem('cart')
            
//             setSelf(JSON.parse(set) || [])
//         }
//     ]
// })

// import { atom } from 'recoil';

// export const cartAtom = atom({
//     key: 'cartAtom',
//     default: [],
//     effects_UNSTABLE: [
//         ({ setSelf }) => {
//             const set = localStorage.getItem('cart');
//             try {
//                 const parsedData = JSON.parse(set);
//                 setSelf(parsedData || []);
//             } catch (error) {
//                 console.error('Error parsing cart data from localStorage:', error);
//                 setSelf([]);
//             }
//         }
//     ]
// });

import { atom } from 'recoil';

export const cartAtom = atom({
    key: 'cartAtom',
    default: [],
    effects_UNSTABLE: [
        ({ setSelf }) => {
            const storedData = localStorage.getItem('cart');
            try {
                if (storedData !== null) {
                    const parsedData = JSON.parse(storedData);
                    if (Array.isArray(parsedData)) {
                        setSelf(parsedData);
                    } else {
                        console.error('Stored cart data is not an array:', storedData);
                        setSelf([]);
                    }
                }
            } catch (error) {
                console.error('Error parsing cart data from localStorage:', error);
                setSelf([]);
            }
        }
    ]
});

