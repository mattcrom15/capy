import {atom} from 'recoil'

export const InputState = atom({
    key: 'inputvalue',
    default: '',
});


export const CurrentTimecode = atom({
    key: 'CurrentTimecode',
    default: '00:00:00.00',
});