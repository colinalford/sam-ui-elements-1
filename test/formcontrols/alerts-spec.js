'use strict';
var expect = require('chai').expect;
var Alerts = require('../../src/js/formcontrols/alerts.js');

describe('Alerts', function() {
    it('should exist', function() {        
        expect(Alerts).to.not.be.undefined;
    });
});



describe('#Alerts)', function() {
    it('it should return a string', function() {
        
        var dataItem = {type:"Success", title:"Test", description:"This is Test"};
        var expected = '<div class="usa-alert usa-alert-success">'+
                            '<div class="usa-alert-body">'+
                              '<h3 class="usa-alert-heading">'+dataItem.title+'</h3>'+
                              '<p class="usa-alert-text">'+dataItem.description+'</p>'+
                            '</div>'+
                          '</div>';
        var actual = Alerts.Alert(dataItem);
        expect(actual).to.eql(expected);
    });
});