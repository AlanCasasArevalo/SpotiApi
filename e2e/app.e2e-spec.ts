import { SpotiApiPage } from './app.po';

describe('spoti-api App', () => {
  let page: SpotiApiPage;

  beforeEach(() => {
    page = new SpotiApiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
