enum devices {
    isMobile = 'isMobile',
    isTablet = 'isTablet',
    isLaptop = 'isLaptop',
    isPC = 'isPC',
}


type matchingDevices = {
    [key in devices]: boolean
}

export {devices}
export type {matchingDevices}