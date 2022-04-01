import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tactical-session-creation',
  templateUrl: './tactical-session-creation.component.html',
  styleUrls: ['./tactical-session-creation.component.scss']
})
export class TacticalSessionCreationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) {

    this.form = this.fb.group({
      strategicSessionId: [''],
      name: ['', Validators.required],
      description: ['']
    });
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.form.get("strategicSessionId")?.setValue(params['strategicSessionId']);
    });
  }

  ngOnInit(): void {
  }

}
