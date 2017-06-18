import { MisterFordPage } from './app.po';

describe('mister-ford App', () => {
  let page: MisterFordPage;

  beforeEach(() => {
    page = new MisterFordPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to mf!!');
  });
});
