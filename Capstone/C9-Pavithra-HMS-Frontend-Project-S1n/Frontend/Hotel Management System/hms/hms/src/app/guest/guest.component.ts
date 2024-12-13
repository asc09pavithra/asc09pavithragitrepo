import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GuestsService } from '../service/guests-service';
import { Guests } from '../models/guests.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  router = inject(Router);
  guestService = inject(GuestsService);
  guests: Guests[] = [];
  searchTerm: string = '';
  currentGuest: Guests | null = null;
  newGuest: Guests = {
    id: '', name: '', email: '', phone: '', nationality: '',
   
  };
  showForm: boolean = false;
  filteredGuests: Guests[] = [];

  ngOnInit(): void {
    this.loadGuests();
  }

  loadGuests(): void {
    this.guestService.getGuests().subscribe((data) => {
      this.guests = data;
      this.filteredGuests = data;
    });
  }

  back(): void {
    this.router.navigateByUrl('navbar');
  }

  deleteGuest(id: string): void {
    this.guestService.deleteGuest(id).subscribe(() => {
      this.loadGuests();
    });
  }

  selectGuestForEdit(guest: Guests): void {
    this.currentGuest = guest;
    this.newGuest = { ...guest };
    this.showForm = true;
  }

  saveGuest(): void {
    if (this.newGuest.id) {
      this.guestService.updateGuest(this.newGuest).subscribe(() => {
        this.loadGuests();
        this.showForm = false;
        this.resetForm();
      });
    } else {
      this.guestService.addGuest(this.newGuest).subscribe(() => {
        this.loadGuests();
        this.showForm = false;
        this.resetForm();
      });
    }
  }

  searchGuests(): void {
    this.filteredGuests = this.guests.filter((guest) =>
      guest.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      guest.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      guest.nationality.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  showAddGuestForm(): void {
    this.showForm = true;
    this.resetForm();
  }

  resetForm(): void {
    this.currentGuest = null;
    this.newGuest = { id: '', name: '', email: '', phone: '', nationality: '' };
  }
}
