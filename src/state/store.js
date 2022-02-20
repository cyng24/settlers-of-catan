import { createStore as reduxCreateStore } from "redux"

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

const margin = 4;
const tileSize = 120;
const tilePolygon = `${0+margin} ${((tileSize/3)-10)+(margin/2)} ${tileSize/2} ${0+margin} ${tileSize-margin} ${((tileSize/3)-10)+(margin/2)} ${tileSize-margin} ${(2*(tileSize/3)+10)-(margin/2)} ${tileSize/2} ${tileSize-margin} ${0+margin} ${(2*(tileSize/3)+10)-(margin/2)}`;
const tileFontsize = tileSize/8;

const cardSize = 80;
const cardPolygon = `${margin} ${margin} ${cardSize-margin} ${margin} ${cardSize-margin} ${cardSize-margin} ${margin} ${cardSize-margin}`;
const cardFontsize = cardSize/6;

const initialState = {
    player: null,
    tileProps: { 
        size: tileSize, 
        polygonPoints: tilePolygon, 
        fontSize: tileFontsize 
    },
    cardProps: { 
        size: cardSize, 
        polygonPoints: cardPolygon, 
        fontSize: cardFontsize
    },
    bankProps: { 
        size: cardSize/1.5, 
        fontSize: cardFontsize, 
        values: { 
            pasture: 19, field: 19, hill: 19, mountain: 19, forest: 19
        }
    },
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

const reducer = (state, action) => {
    switch(action.type) {
      case 'changePlayer':
        return Object.assign({}, state, {
          player: action.player,
        });
      case 'useResource':
        let bankProps = state.bankProps;
        let prevValue = bankProps.values[action.resource];
        bankProps.values[action.resource] = prevValue - action.value;
        return Object.assign({}, state, {
          bankProps,
        })
      default:
        return state;
    }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore