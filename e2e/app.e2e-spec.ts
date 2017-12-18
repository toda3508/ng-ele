import { NgElePage } from './app.po';

describe('ng-ele App', () => {
  let page: NgElePage;

  beforeEach(() => {
    page = new NgElePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
