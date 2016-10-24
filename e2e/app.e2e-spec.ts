import { ObReviewPage } from './app.po';

describe('ob-review App', function() {
  let page: ObReviewPage;

  beforeEach(() => {
    page = new ObReviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
