import jest from 'jest';

export const test = {name, testFunc} => {
    try {
        testFunc();
        console.log(`Winner ${name} ran properly`);    
    } catch(error) {
        console.error(`Booo ${name} did an oopsie and returns the error`);
        console.error(error);
    }
}

export const assertEquals = (expected, actual) => {
    if(exptected != actual) {
        throw new Error(`Expected ${expected} to equal ${actual}`);
    }
}