export class app {
    configureRouter(config, router) {
        config.title = "Aurelia";
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }
        ]);
        this.router = router;
    }
}