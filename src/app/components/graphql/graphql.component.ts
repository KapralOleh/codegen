import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { GetCountriesService, GetCountriesQuery } from 'src/app/graphql/generated';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.css']
})
export class GraphqlComponent implements OnInit {
  grahqlData!: ApolloQueryResult<GetCountriesQuery>;

  constructor(
    private getCountriesService: GetCountriesService
  ) { }

  ngOnInit(): void {
    this.getCountriesService.fetch().subscribe((data: ApolloQueryResult<GetCountriesQuery>) => {
      this.grahqlData = data;
    })
  }
}
