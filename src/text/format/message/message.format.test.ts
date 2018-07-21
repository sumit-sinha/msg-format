import { expect } from 'chai';
import { MessageFormat } from './message.format';

describe('Message Format', function() {
  describe('format', function() {
    it('should replace {0} with first argument', function() {
      expect(MessageFormat.format('I am {0}!!!', 'Groot')).to.equal(`I am Groot!!!`);
    });

    it('should replace all occurence of {0} with first argument', function() {
      expect(MessageFormat.format('I am {0}!!!. I am from planet {0}', 'Groot'))
        .to
        .equal(`I am Groot!!!. I am from planet Groot`);
    });

    it('should replace {0} and {1} with arguments at respective index', function() {
      expect(MessageFormat.format('I am {0}!!!. I am {1}', 'Groot', 'Hungry'))
        .to
        .equal('I am Groot!!!. I am Hungry');
    });

    it('should replace {0} and {1} with the values in passed array', function() {
      expect(MessageFormat.format('I am {0}!!!. I am {1}', ['Groot', 'Hungry']))
        .to
        .equal('I am Groot!!!. I am Hungry');
    });

    it('should replace {0, time} with short time provided 0th arg is a date object', function() {
      const dt = new Date(2005, 11, 12, 15, 52, 11, 737);
      expect(MessageFormat.format('{0, time}', dt))
        .to
        .equal('15:52');
    });

    it('should replace {0, date} with short date provided 0th arg is a date object', function() {
      const dt = new Date(2005, 11, 12, 15, 52, 11, 737);
      expect(MessageFormat.format('{0, date}', dt))
        .to
        .equal('12/12/2005');
    });

    it('should replace {0, time, hh:mm a} with time provided 0th argument is date object', function() {
      const dt = new Date(2005, 11, 12, 15, 52, 11, 737);
      expect(MessageFormat.format('{0, time, hh:mm a}', dt))
        .to
        .equal('03:52 PM');
    });

    it('should replace {0, date, dd MMMM yyyy} with date provided 0th argument is date object', function() {
      const dt = new Date(2005, 11, 12, 15, 52, 11, 737);
      expect(MessageFormat.format('{0, date, dd MMMM yyyy}', dt))
        .to
        .equal('12 December 2005');
    });
  });
});