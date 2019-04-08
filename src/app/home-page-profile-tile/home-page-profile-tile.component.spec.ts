import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageProfileTileComponent } from './home-page-profile-tile.component';

describe('HomePageProfileTileComponent', () => {
  let component: HomePageProfileTileComponent;
  let fixture: ComponentFixture<HomePageProfileTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageProfileTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageProfileTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
