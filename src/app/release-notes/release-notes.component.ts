import { Component, OnInit } from '@angular/core';
import {ReleaseNote} from '../ReleaseNote';

@Component({
  selector: 'app-release-notes',
  templateUrl: './release-notes.component.html',
  styleUrls: ['./release-notes.component.css']
})
export class ReleaseNotesComponent implements OnInit {
  releaseNote: ReleaseNote = {
    id: 1,
    app: 'FalconTalk',
    versionNote: '1.0.17-20190211-1',
    releaseType: 'CUSTOMER',
    signed: 'SIGNED',
    buildType: 'RELEASE',
    user: 'Mahmudur'
  };

  constructor() { }

  ngOnInit() {
  }

}
