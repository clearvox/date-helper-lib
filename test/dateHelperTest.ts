import * as chai from 'chai';
import {DateHelper} from '../src';

const assert = chai.assert;

describe('DateHelper test', function () {
    describe('parseAsUTC', function () {
        it('Should work for normal times', function () {
            assert.equal(DateHelper.parseAsUTC('2018-04-23 11:13:49').toISOString(), '2018-04-23T11:13:49.000Z');
        });

        it('Should work with milliseconds', function () {
            assert.equal(DateHelper.parseAsUTC('2018-04-23 11:13:49.159').toISOString(), '2018-04-23T11:13:49.159Z');
        });

        it('Should handle it when String has T but not Z - assume UTC', function () {
            assert.equal(DateHelper.parseAsUTC('2018-04-23T11:13:49').toISOString(), '2018-04-23T11:13:49.000Z');
        });
    });

    describe('formatForLogging', function () {
        it('should format dates to consistent logging style', function () {
            assert.equal(DateHelper.formatForLogging(new Date('2018-10-10 10:10:10.100')), 'Oct 10 10:10:10.100');
            assert.equal(DateHelper.formatForLogging(new Date('2018-01-01 01:01:01.010')), 'Jan 1 01:01:01.010');
            assert.equal(DateHelper.formatForLogging(new Date('2018-01-01 01:01:01.001')), 'Jan 1 01:01:01.001');
        });
    });

    describe('check if a year is a leap year', function () {
        it('should be every 4 years', function () {
            assert.equal(DateHelper.isLeapYear(new Date('2016-01-01')), true);
            assert.equal(DateHelper.isLeapYear(new Date('2017-01-01')), false);
            assert.equal(DateHelper.isLeapYear(new Date('2018-01-01')), false);
            assert.equal(DateHelper.isLeapYear(new Date('2019-01-01')), false);
            assert.equal(DateHelper.isLeapYear(new Date('2020-01-01')), true);
        });

        it('should not be every 100 years but be every 400 years', function () {
            assert.equal(DateHelper.isLeapYear(new Date('2100-01-01')), false);
            assert.equal(DateHelper.isLeapYear(new Date('2200-01-01')), false);
            assert.equal(DateHelper.isLeapYear(new Date('2300-01-01')), false);
            assert.equal(DateHelper.isLeapYear(new Date('2400-01-01')), true);
            assert.equal(DateHelper.isLeapYear(new Date('2500-01-01')), false);
        });
    });

    describe('check days in a month', function () {
        it('should know per month the amount of days', function () {
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-01-01')), 31);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-02-01')), 28);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-03-01')), 31);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-04-01')), 30);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-05-01')), 31);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-06-01')), 30);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-07-01')), 31);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-08-01')), 31);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-09-01')), 30);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-10-01')), 31);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-11-01')), 30);
            assert.equal(DateHelper.getDaysInMonth(new Date('2018-12-01')), 31);
        });

        it('should know per month the amount of days in february in a leap year', function () {
            assert.equal(DateHelper.getDaysInMonth(new Date('2020-02-01')), 29);
        });
    });
});
