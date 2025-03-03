// type Tile = 'red' | 'brown' | 'gray' | 'yellow' | 'blue' | 'green'

export interface ResourceProp {
    resource: string,
    value: number
}

interface PropTypes {
    size: number,
    polygonPoints: string,
    fontSize: number
}

interface TileTypeProps {
    tile: string
}

export interface InitialStateProps {
    player: string | null,
    tileProps: PropTypes,
    cardProps: PropTypes,
    bankProps: {
        size: number,
        fontSize: number,
        bankValues: {
        pasture: number,
        field: number,
        hill: number,
        mountain: number,
        forest: number
        },
    },
    tileColors: {
        green: string,
        red: string,
        yellow: string,
        brown: string,
        gray: string,
        blue: string,
    },
    cityColors: string[],
    types: TileTypeProps[],
    values: number[],
    harbors: string[]
}