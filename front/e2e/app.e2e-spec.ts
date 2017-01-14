import { CoompanyWebsitePage } from './app.po';

describe('coompany-website App', function() {
  let page: CoompanyWebsitePage;

  beforeEach(() => {
    page = new CoompanyWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
