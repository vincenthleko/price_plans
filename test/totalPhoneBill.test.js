import assert from "assert";
import { totalPhoneBill } from "../totalPhoneBill.js";

describe('The totalPhoneBill function', function() {

    const plans = [
        { id: 1, plan_name: 'sms 101', sms_price: 0.55, call_price: 2.75 },
        { id: 2, plan_name: 'call 101', sms_price: 1.75, call_price: 0.65 }
    ];

    describe('for the "sms 101" plan', function() {
        const plan = plans[0];

        it('should return "R6.05" for two calls and one SMS', function() {
            const data = "call, call, sms";
            assert.equal(totalPhoneBill(data, plan), "R6.05");
        });

        it('should return "R6.60" for two calls and two SMS', function() {
            const data = "call, sms, sms, call";
            assert.equal(totalPhoneBill(data, plan), "R6.60");
        });

        it('should return "R1.65" for three SMS', function() {
            const data = "sms, sms, sms";
            assert.equal(totalPhoneBill(data, plan), "R1.65");
        });

        it('should return "R2.75" for one call', function() {
            const data = "call";
            assert.equal(totalPhoneBill(data, plan), "R2.75");
        });

        it('should return "R0.00" for no actions', function() {
            const data = "";
            assert.equal(totalPhoneBill(data, plan), "R0.00");
        });

        it('should return "R9.35" for three calls and two SMS', function() {
            const data = "sms, call, sms, call, call";
            assert.equal(totalPhoneBill(data, plan), "R9.35");
        });
    });

    describe('for the "call 101" plan', function() {
        const plan = plans[1];

        it('should return "R3.05" for two calls and one SMS', function() {
            const data = "call, call, sms";
            assert.equal(totalPhoneBill(data, plan), "R3.05");
        });

        it('should return "R4.80" for two calls and two SMS', function() {
            const data = "call, sms, sms, call";
            assert.equal(totalPhoneBill(data, plan), "R4.80");
        });

        it('should return "R5.25" for three SMS', function() {
            const data = "sms, sms, sms";
            assert.equal(totalPhoneBill(data, plan), "R5.25");
        });

        it('should return "R0.65" for one call', function() {
            const data = "call";
            assert.equal(totalPhoneBill(data, plan), "R0.65");
        });

        it('should return "R0.00" for no actions', function() {
            const data = "";
            assert.equal(totalPhoneBill(data, plan), "R0.00");
        });

        it('should return "R5.45" for three calls and two SMS', function() {
            const data = "sms, call, sms, call, call";
            assert.equal(totalPhoneBill(data, plan), "R5.45");
        });
    });

});
