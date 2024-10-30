import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuerpoPage } from './cuerpo.page';

describe('CuerpoPage', () => {
  let component: CuerpoPage;
  let fixture: ComponentFixture<CuerpoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
