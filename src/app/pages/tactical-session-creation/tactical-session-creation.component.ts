import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TacticalSessionsService } from 'src/app/services/tactical-sessions.service';

@Component({
  selector: 'app-tactical-session-creation',
  templateUrl: './tactical-session-creation.component.html',
  styleUrls: ['./tactical-session-creation.component.scss']
})
export class TacticalSessionCreationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private tacticalSessionService: TacticalSessionsService,
    private fb: FormBuilder,
    private router: Router,
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

  save() {
    this.tacticalSessionService.create(this.form.value).subscribe(result => {
      this.router.navigateByUrl("tactical-sessions/detail/" + result.id);
    });
  }

}
