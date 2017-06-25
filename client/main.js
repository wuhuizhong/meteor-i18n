import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

let locale = 'zh-CN';

/**
 * anti:i18n setup
 */
i18n.showMissing('[no translation for "<%= label %>" in <%= language %>]');
i18n.setLanguage(locale);

import './languages/de.i18n';
import './languages/fr.i18n';
import './languages/it.i18n';
import './languages/zh-CN.i18n';

/**
 * tap:i18n setup
 */
TAPi18n.setLanguage(locale);

Template.languageSelector.events({
  'click a'(event, instance) {
    event.preventDefault();
    // get lang key
    locale = $(event.currentTarget).data('lang');
    TAPi18n.setLanguage(locale);
    i18n.setLanguage(locale);
  },
});
