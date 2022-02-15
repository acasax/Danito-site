export type TSideNavBatItem = {
    buttonName: string,
    img: string,
    selected: string,
    setSelected: (buttonName: string) => void,
    flexDirection: 'column' | 'row' | string,
}
