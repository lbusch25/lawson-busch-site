import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public isActive: boolean = false;
  public gitIcon: any = faGithubAlt;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isActive = false;
  }

  public toHome(): void {
    this.router.navigate(['/home']);
    this.isActive = false;
  }

  public toAbout(): void {
    this.router.navigate(['about']);
    this.isActive = false;
  }

  public toPricing(): void {
    this.router.navigate(['pricing']);
    this.isActive = false;
  }

  public toContact(): void {
    this.router.navigate(['contact']);
    this.isActive = false;
  }

  public toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
