import { EmpDetailPage } from './app.po';

describe('emp-detail App', () => {
  let page: EmpDetailPage;

  beforeEach(() => {
    page = new EmpDetailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
