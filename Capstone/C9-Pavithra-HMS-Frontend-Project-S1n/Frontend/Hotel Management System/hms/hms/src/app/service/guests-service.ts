import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Guests } from "../models/guests.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GuestsService {
    searchGuests(searchTerm: string) {
      throw new Error('Method not implemented.');
    }
    baseUrl: string = "http://localhost:8080/api/guests";

    constructor(private http: HttpClient) { }

    getGuests(): Observable<Guests[]> {
        return this.http.get<Guests[]>(this.baseUrl);
    }

    addGuest(guest: Guests): Observable<Guests> {
        return this.http.post<Guests>(this.baseUrl, guest);
    }

    updateGuest(guest: Guests): Observable<Guests> {
        return this.http.put<Guests>(`${this.baseUrl}/${guest.id}`, guest);
    }

    deleteGuest(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
