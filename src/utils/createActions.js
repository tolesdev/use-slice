export default actions => {
    const keys = Object.keys(actions);
    return keys.reduce((creators, action) => {
        creators[action] = payload => ({ type: action, payload })
        return creators;
    }, {});
}