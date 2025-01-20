import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FlowbiteService } from '../../../core/services/flowbite/flowbite.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
    this.setupNavbarToggle();
  }
  private setupNavbarToggle(): void {
    const toggleButton = document.querySelector<HTMLButtonElement>('[data-collapse-toggle="navbar-default"]');
    const sidebar = document.getElementById('mobile-sidebar');
    const closeButton = document.getElementById('close-sidebar');
    const overlay = document.getElementById('overlay');
    
    if (toggleButton && sidebar && closeButton && overlay) {
      // فتح الـ Sidebar عند النقر على زر القائمة
      toggleButton.addEventListener('click', () => {
        sidebar.classList.add('open');
        sidebar.focus(); // التركيز على الـ sidebar
        sidebar.classList.remove('hidden');
        overlay.classList.add('active'); // إظهار الـ Overlay
        document.body.style.overflow = 'hidden'; // منع التمرير على باقي الصفحة
      });
  
      // إغلاق الـ Sidebar عند النقر على زر الإغلاق
      closeButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebar.classList.add('hidden');
        overlay.classList.remove('active'); // إخفاء الـ Overlay
        document.body.style.overflow = ''; // استعادة التمرير على الصفحة
      });
  
      // إغلاق الـ Sidebar عند النقر على الـ Overlay
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebar.classList.add('hidden');
        overlay.classList.remove('active'); // إخفاء الـ Overlay عند الضغط خارج الـ Sidebar
        document.body.style.overflow = ''; // استعادة التمرير
      });
    }
  }
  
}