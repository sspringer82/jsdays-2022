history.replaceState('form', '', 'form');

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        history.pushState('list', '', '/list');
        console.log('list');
    });
});

console.log('foo');

window.onpopstate = (e) => {
    console.log(e.state);
    switch (e.state) {
        case 'list':
            // display list
            console.log('list');
            break;
        default:
            // display default
            console.log('default');
    }
}