import assert from "assert";
import { totalPhoneBill } from "../totalPhoneBill.js";

describe('The totalPhoneBill function', function() {

    const plans = [
        { id: 1, plan_name: 'sms 101', sms_price: 0.55, call_price: 2.75 },
        { id: 2, plan_name: 'call 101', sms_price: 1.75, call_price: 0.65 }
    ];

    const testCases = [
        {
            description: 'two calls and one SMS',
            data: "call, call, sms",
            expectedTotal: (plan) => plan.call_price * 2 + plan.sms_price,
        },
        {
            description: 'two calls and two SMS',
            data: "call, sms, sms, call",
            expectedTotal: (plan) => plan.call_price * 2 + plan.sms_price * 2,
        },
        {
            description: 'three SMS',
            data: "sms, sms, sms",
            expectedTotal: (plan) => plan.sms_price * 3,
        },
        {
            description: 'one call',
            data: "call",
            expectedTotal: (plan) => plan.call_price,
        },
        {
            description: 'no actions',
            data: "",
            expectedTotal: () => 0.00,
        },
        {
            description: 'three calls and two SMS',
            data: "sms, call, sms, call, call",
            expectedTotal: (plan) => plan.call_price * 3 + plan.sms_price * 2,
        }
    ];

    plans.forEach((plan) => {
        describe(`for the "${plan.plan_name}" plan`, function() {
            testCases.forEach((testCase) => {
                it(`should return the correct total for ${testCase.description}`, function() {
                    const expectedTotal = `R${testCase.expectedTotal(plan).toFixed(2)}`;
                    assert.equal(totalPhoneBill(testCase.data, plan), expectedTotal);
                });
            });
        });
    });

});

