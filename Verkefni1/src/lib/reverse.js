export function reverse(str){
    if(!str){
        return undefined;
    }
    const foo = 1;
    const split = str.split('');
    split.reverse();
    return split.join('');
}
