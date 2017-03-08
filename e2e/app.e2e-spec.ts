import { ServiceSubscriptionTestPage } from './app.po';

describe('service-subscription-test App', () => {
  let page: ServiceSubscriptionTestPage;

  beforeEach(() => {
    page = new ServiceSubscriptionTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
