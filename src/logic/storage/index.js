export const saveGameToStorage = ({ board, turn }) => {
    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', turn);
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}

export const getBoardFromStorage = () => {
    return window.localStorage.getItem('board');
}

export const getTurnFromStorage = () => {
    return window.localStorage.getItem('turn');
}