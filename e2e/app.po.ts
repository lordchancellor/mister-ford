import { browser, by, element } from 'protractor';

export class MisterFordPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mf-root h1')).getText();
  }
}
