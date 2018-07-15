import { expect } from 'chai';
import { MessageFormat } from './message.format';

describe('Message Format', function() {
  describe('format', function() {
    it('should replace {0} with first argument', function() {
      expect(MessageFormat.format('I am {0}!!!', 'Groot')).to.equal(`I am Groot!!!`);
    });
  });
});