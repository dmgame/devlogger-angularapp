import { Component, OnInit } from '@angular/core';

// Service
import { ProjectsService } from "../../../services/projects.service";
import { UuidService } from "../../../services/uuid.service";

// Models
import { Log } from "../../../models/Log";
import { Project } from "../../../models/Project";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectName: string;

  constructor(
    public projectsServices: ProjectsService,
    public uuid: UuidService
  ) { }

  ngOnInit() {

  }

  onSubmit() {
      this.projectsServices.addProject({
        projectId: this.uuid.generate(),
        name: this.projectName,
        logs: []
      })
  }

}
