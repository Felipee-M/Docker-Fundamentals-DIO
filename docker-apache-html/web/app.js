document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const inc = document.getElementById('inc');
    const reset = document.getElementById('reset')
    let n = 0;
    const render = () => counter.textContent = n;
    inc.addEventListener('click', () => {n++; render(); });
    reset.addEventListener('click', () => {n = 0; render(); });
    render();
});