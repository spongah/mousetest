import { MousetestPage } from './app.po';

describe('mousetest App', () => {
  let page: MousetestPage;

  beforeEach(() => {
    page = new MousetestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
