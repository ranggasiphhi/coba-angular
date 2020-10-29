import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularInitialisation } from './angular-initialisation.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AngularInitialisation
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AngularInitialisation);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular10'`, () => {
    const fixture = TestBed.createComponent(AngularInitialisation);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular10');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularInitialisation);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular10 app is running!');
  });
});
