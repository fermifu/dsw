import { DiveshopworldPage } from './app.po';

describe('diveshopworld App', function() {
  let page: DiveshopworldPage;

  beforeEach(() => {
    page = new DiveshopworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
