/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BandaFormComponent } from './banda-form.component';

describe('BandaFormComponent', () => {
  let component: BandaFormComponent;
  let fixture: ComponentFixture<BandaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
