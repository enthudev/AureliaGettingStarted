import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)

export class users {
    heading = 'Github Users';
    users = [];

    constructor(http) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://api.github.com/');
        });

        this.http = http;
    }

    activate() {
        return this.http.fetch('users')
            .then(response => response.json())
            .then(users => this.users = users);
    }
}