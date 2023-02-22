import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainVille } from '../mainVille';
import { IpService } from '../ip.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent {
  villeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private ipService: IpService) { }

  ngOnInit() {
    this.villeForm = this.formBuilder.group({
      city: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      iso2: ['', Validators.required]
    });
  }

  onSubmit() {
    const ville: MainVille = {
      city: this.villeForm.value.city,
      lat: this.villeForm.value.lat,
      lng: this.villeForm.value.lng,
      iso2: this.villeForm.value.iso2
    };
    this.ipService.addCity(ville).subscribe();
  }
}


