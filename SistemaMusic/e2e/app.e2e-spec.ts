import { SistemaMusicPage } from './app.po';

describe('sistema-music App', function() {
  let page: SistemaMusicPage;

  beforeEach(() => {
    page = new SistemaMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
