import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    saveServers( servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://angular-http-746f9.firebaseio.com/servers.json',
        //  servers, {headers: headers});
        return this.http.put('https://angular-http-746f9.firebaseio.com/servers.json',
         servers, {headers: headers});
    }
    getServers() {
        return this.http.get('https://angular-http-746f9.firebaseio.com/servers')
        .map( (response: Response) => {
            const data = response.json();
            for (const server of data) {
                server.name = 'FETCHED' + server.name;
            }
            return data;
        })
        .catch( (error: Response) => {
            return Observable.throw('Something broke :(');
        });
    }
    getAppName() {
        return this.http.get('https://angular-http-746f9.firebaseio.com/appName.json')
        .map( (response: Response) => {
            return response.json();
        } );
    }

}
