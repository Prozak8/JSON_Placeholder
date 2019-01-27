import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private placeholderApi = 'https://jsonplaceholder.typicode.com'
    randomNumber = Math.floor(Math.random() * 10)

    constructor(private _httpClient: HttpClient) { }

    allUsers(){
        return this._httpClient.get(`${this.placeholderApi}/users`);
    }

    random(){
        return this._httpClient.get(`${this.placeholderApi}/users/${this.randomNumber}`)
    }
}