export type TSideNavBatItem = {
    buttonText: string,
    img: string,
    selected: string,
    setSelected: (buttonName: string) => void,
    flexDirection: 'column' | 'row' | string,
}
