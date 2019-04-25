import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    const angularFireAuthStub = {
      auth: { signInWithPopup: () => ({ then: () => ({}) }) },
    };
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: AngularFireAuth, useValue: angularFireAuthStub }],
    });
    service = TestBed.get(AuthService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
