import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  cardContet: string = "Rhoncus mi nascetur ridiculus ultrices tortor est aliquam sapien viverra pharetra, parturient ligula fusce congue non finibus neque fames ultricies.";
  cardImage: string = "";

  team = [
    {name: "Name", role: "Role", content:this.cardContet},
    {name: "Name", role: "Role", content:this.cardContet},
    {name: "Name", role: "Role", content:this.cardContet},
    {name: "Name", role: "Role", content:this.cardContet},
    {name: "Name", role: "Role", content:this.cardContet},
    {name: "Name", role: "Role", content:this.cardContet},
    {name: "Name", role: "Role", content:this.cardContet},
    {name: "Name", role: "Role", content:this.cardContet},
    {name: "Name", role: "Role", content:this.cardContet},
    {name: "Name", role: "Role", content:this.cardContet}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
