import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/openapi/generated/models';
import { PetService } from 'src/app/openapi/generated/services';

@Component({
  selector: 'app-openapi',
  templateUrl: './openapi.component.html',
  styleUrls: ['./openapi.component.css']
})
export class OpenapiComponent implements OnInit {
  openAPIData: any;

  constructor(
    private petService: PetService
    ) { }

  ngOnInit(): void {
    this.petService.addPet$Json$Json({ body: {
      category: {id: 1, name: 'new category'},
      id: 1,
      name: 'New PEt',
      photoUrls: []
    }}).subscribe(() => {});

    this.petService.getPetById$Json({ petId: 1 }).subscribe((data: Pet) => this.openAPIData = data);
  }
}
