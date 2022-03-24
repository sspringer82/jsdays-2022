history.replaceState('form', '', 'form');

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        history.pushState({ aktion: 'edit', id: 47 }, '', '/list');
        console.log('list');
    });
});

console.log('foo');

window.onpopstate = (e) => {
    console.log(e.state);
    switch (e.state.aktion) {
        case 'list':
            // display list
            console.log('list');
            break;
        default:
            // display default
            console.log('default');
    }
}