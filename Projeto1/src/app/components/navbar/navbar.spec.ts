import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar } from './navbar';

<<<<<<< HEAD:src/app/components/login/login.spec.ts
describe('Login', () => {
  let component: Login; 
  let fixture: ComponentFixture<Login>;
=======
describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;
>>>>>>> 75c3b817511a57122092859448a589e2c40eec1f:Projeto1/src/app/components/navbar/navbar.spec.ts

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
