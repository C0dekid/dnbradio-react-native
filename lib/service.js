/* https://www.youtube.com/watch?v=TMSb52ynNQc */
export default class MainService {
    static load(cb) {
        setTimeout(cb, 5000);
    }
    static requestTimer(cb) {
        setInterval(cb, 20000);
    }
}