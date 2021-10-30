export const calcRealSize = (winWidth) => {
    let result;
    if (winWidth >= 1240) {
        result = 'desktop';
    } else if (winWidth >= 768) {
        result = 'tablet';
    } else {
        result = 'mobile';
    }
    return result;
};