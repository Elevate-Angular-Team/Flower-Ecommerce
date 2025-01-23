import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FlowbiteService } from '../../../core/services/flowbite/flowbite.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('toggleButton') toggleButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('mobileSidebar') mobileSidebar!: ElementRef<HTMLDivElement>;
  @ViewChild('closeButton') closeButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {});
  }

  ngAfterViewInit(): void {
    this.setupNavbarToggle();
  }

  private setupNavbarToggle(): void {
    const toggleButton = this.toggleButton.nativeElement;
    const sidebar = this.mobileSidebar.nativeElement;
    const closeButton = this.closeButton.nativeElement;
    const overlay = this.overlay.nativeElement;

    toggleButton.addEventListener('click', () => {
      sidebar.classList.add('open');
      sidebar.focus();
      sidebar.classList.remove('hidden');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeButton.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebar.classList.add('hidden');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebar.classList.add('hidden');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
}