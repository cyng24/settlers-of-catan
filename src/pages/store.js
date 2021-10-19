import { createStore } from 'redux'
// import axios from 'axios';

const tileGreen = '#759d75';
const tileRed = '#ae5d5d';
const tileYellow = '#fbdf8b';
const tileBrown = '#926f5a';
const tileGray = '#818181';
const tileBlue = '#c1ccea';

const cityGreen = '#009900';
const cityRed = '#cc0000';
const cityYellow = '#f2b706';
const cityBlue = '#1919ff';

const tileTypes = [{ red: tileRed }, { red: tileRed }, { red: tileRed }, { brown: tileBrown }, { brown: tileBrown }, { brown: tileBrown }, { brown: tileBrown }, { gray: tileGray }, { gray: tileGray }, { gray: tileGray }, { yellow: tileYellow }, { yellow: tileYellow }, { yellow: tileYellow }, { yellow: tileYellow }, { green: tileGreen }, { green: tileGreen }, { green: tileGreen }, { green: tileGreen }, { blue: tileBlue }]
const tileValues = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12, null];
const harborTypes = [`${tileRed}|2:1`, `${tileBrown}|2:1`, `${tileGray}|2:1`, `${tileYellow}|2:1`, `${tileGreen}|2:1`, `${tileBlue}|3:1`, `${tileBlue}|3:1`, `${tileBlue}|3:1`, `${tileBlue}|3:1`];

const initialState = {
    tileColors: { green: tileGreen, red: tileRed, yellow: tileYellow, brown: tileBrown, gray: tileGray, blue: tileBlue },
    cityColors: ['none', cityRed, cityBlue, cityYellow, cityGreen],
    types: randomize(tileTypes),
    values: randomize(tileValues),
    harbors: randomize(harborTypes),
}

function randomize(val) {
    const len = val.length;
    let randomArray = [];
    for (let i=0; i<len; i++) {
        let newLen = val.length;
        let index = Math.floor(Math.random()*newLen);
        randomArray.push(val[index]);
        val = val.slice(0, index).concat(val.slice(index+1));
    }
    return randomArray;
}

const appReducer = (state = initialState, action) => {
    return state;
}

// export function getSomething (thing) {
//     return { type: 'GET_THING', thing }
// }

// export function addSomething (newThing) {
//     return { type: 'ADD_THING', newThing: {name: newThing} }
// }

// export function fetchSomething() {
//     return (dispatch) => {
//         return axios.get('/api/thing')
//         .then(res => res.data)
//         .then(thing => {
//             return dispatch(getSomething(thing));
//         })
//         .catch((err) => {console.log(err)});
//     };
// }

// export function postSomething(thing) {
//     return (dispatch) => {
//         return axios.post('/api/thing/', thing)
//         .then(res => res.data)
//         .then(newThing => {
//             return dispatch(addSomething(newThing));
//         })
//         .catch( (err) => {console.trace(err)});
//     }
// }

export default createStore(appReducer)
