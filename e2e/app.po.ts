import { browser, element, by } from 'protractor';

export class ShoppingListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sl-root h1')).getText();
  }
}
