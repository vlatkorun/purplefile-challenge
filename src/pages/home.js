function home(req, { engine, root }) {
    root.innerHTML = engine.renderFileSync('home', {});
}

export default home;