import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private placeholderApi = 'https://jsonplaceholder.typicode.com'

    constructor(private _httpClient: HttpClient) { }

    allUsers(){
        return this._httpClient.get(`${this.placeholderApi}/users`);
    }

    // random(){
    //     random = Math.floor(0..50)
    //     return this._httpClient.get(`${this.placeholderApi}/users/`)
    // }
}