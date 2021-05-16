import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieToSeeComponent } from './movie-to-see.component';

describe('MovieToSeeComponent', () => {
  let component: MovieToSeeComponent;
  let fixture: ComponentFixture<MovieToSeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieToSeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieToSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
