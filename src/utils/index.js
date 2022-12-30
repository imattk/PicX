export function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    if(i % 4 === 0){
        return 'tall'
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}