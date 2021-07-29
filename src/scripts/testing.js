var testSuites = 0;
var tests = 0;
var snapshots = 0;
var time = 0;
var numOfTests = 5; // number of times to repeat unit test on function

/* Onload */
console.log('%cBlack box test functions by executing any of the following functions below:', 'color: blue')
console.log('%ctest(\"attack\");', 'color: blue')
console.log('%ctest(\"AI\");', 'color: blue')
console.log('%ctest(\"findMaxOpponentAttack\");', 'color: blue')
console.log('%ctest(\"findMaxPlayerAttack\");', 'color: blue')
console.log('%ctest(\"findMaxOpponentHealth\");', 'color: blue')
console.log('%ctest(\"findMaxPlayerHealth\");', 'color: blue')
console.log('%ctest(\"checkForLoss\");', 'color: blue')
console.log('%ctest(\"showDamageLabel\");', 'color: blue')
/* ==================================================================== */
/* Functions to test include:
test("attack");
test("AI");
test("findMaxOpponentAttack");
test("findMaxPlayerAttack");
test("findMaxOpponentHealth");
test("findMaxPlayerHealth");
test("checkForLoss");
test("showDamageLabel");
*/
/* ==================================================================== */

function test(functionToTest) {
    if (functionToTest == "attack") {
        for (let i=0; i<numOfTests; i++) {
            tests++;
            var t0 = performance.now()
            var s0 = t0 / 1000;
            attack();
            var t1 = performance.now()
            var s1 = t1 / 1000;
        }
        if (attack()) {
            testSuites++;
            console.log("attack() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Passed! '+testSuites+' total', 'color: green')
            console.log('%cTests: '+tests+' Test/s Passed! '+tests+' total', 'color: green')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for attack() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        } else {
            testSuites++;
            console.log("attack() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Failed! '+testSuites+' total', 'color: red')
            console.log('%cTests: '+tests+' Test/s Failed! '+tests+' total', 'color: red')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for attack() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        }
        testSuites = 0;
        tests = 0;
    }
    else if (functionToTest == "AI") {
        for (let i=0; i<numOfTests; i++) {
            tests++;
            var t0 = performance.now()
            var s0 = t0 / 1000;
            AI();
            var t1 = performance.now()
            var s1 = t1 / 1000;
        }
        if (AI()) {
            testSuites++;
            console.log("AI() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Passed! '+testSuites+' total', 'color: green')
            console.log('%cTests: '+tests+' Test/s Passed! '+tests+' total', 'color: green')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for attack() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        } else {
            testSuites++;
            console.log("AI() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Failed! '+testSuites+' total', 'color: red')
            console.log('%cTests: '+tests+' Test/s Failed! '+tests+' total', 'color: red')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for AI() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        }
        testSuites = 0;
        tests = 0;
    }
    else if (functionToTest == "findMaxOpponentAttack") {
        for (let i=0; i<numOfTests; i++) {
            tests++;
            var t0 = performance.now()
            var s0 = t0 / 1000;
            findMaxOpponentAttack();
            var t1 = performance.now()
            var s1 = t1 / 1000;
        }
        if (findMaxOpponentAttack()) {
            testSuites++;
            console.log("findMaxOpponentAttack() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Passed! '+testSuites+' total', 'color: green')
            console.log('%cTests: '+tests+' Test/s Passed! '+tests+' total', 'color: green')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for findMaxOpponentAttack() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        } else {
            testSuites++;
            console.log("findMaxOpponentAttack() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Failed! '+testSuites+' total', 'color: red')
            console.log('%cTests: '+tests+' Test/s Failed! '+tests+' total', 'color: red')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for findMaxOpponentAttack() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        }
        testSuites = 0;
        tests = 0;
    }
    else if (functionToTest == "findMaxPlayerAttack") {
        for (let i=0; i<numOfTests; i++) {
            tests++;
            var t0 = performance.now()
            var s0 = t0 / 1000;
            findMaxPlayerAttack();
            var t1 = performance.now()
            var s1 = t1 / 1000;
        }
        if (findMaxPlayerAttack()) {
            testSuites++;
            console.log("findMaxPlayerAttack() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Passed! '+testSuites+' total', 'color: green')
            console.log('%cTests: '+tests+' Test/s Passed! '+tests+' total', 'color: green')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for findMaxPlayerAttack() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        } else {
            testSuites++;
            console.log("findMaxPlayerAttack() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Failed! '+testSuites+' total', 'color: red')
            console.log('%cTests: '+tests+' Test/s Failed! '+tests+' total', 'color: red')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for findMaxPlayerAttack() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        }
        testSuites = 0;
        tests = 0;
    }
    else if (functionToTest == "findMaxOpponentHealth") {
        for (let i=0; i<numOfTests; i++) {
            tests++;
            var t0 = performance.now()
            var s0 = t0 / 1000;
            findMaxOpponentHealth();
            var t1 = performance.now()
            var s1 = t1 / 1000;
        }
        if (findMaxOpponentHealth()) {
            testSuites++;
            console.log("findMaxOpponentHealth() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Passed! '+testSuites+' total', 'color: green')
            console.log('%cTests: '+tests+' Test/s Passed! '+tests+' total', 'color: green')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for findMaxOpponentHealth() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        } else {
            testSuites++;
            console.log("findMaxOpponentHealth() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Failed! '+testSuites+' total', 'color: red')
            console.log('%cTests: '+tests+' Test/s Failed! '+tests+' total', 'color: red')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for findMaxOpponentHealth() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        }
        testSuites = 0;
        tests = 0;
    }
    else if (functionToTest == "findMaxPlayerHealth") {
        for (let i=0; i<numOfTests; i++) {
            tests++;
            var t0 = performance.now()
            var s0 = t0 / 1000;
            findMaxPlayerHealth();
            var t1 = performance.now()
            var s1 = t1 / 1000;
        }
        if (findMaxPlayerHealth()) {
            testSuites++;
            console.log("findMaxPlayerHealth() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Passed! '+testSuites+' total', 'color: green')
            console.log('%cTests: '+tests+' Test/s Passed! '+tests+' total', 'color: green')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for findMaxPlayerHealth() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        } else {
            testSuites++;
            console.log("findMaxPlayerHealth() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Failed! '+testSuites+' total', 'color: red')
            console.log('%cTests: '+tests+' Test/s Failed! '+tests+' total', 'color: red')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for findMaxPlayerHealth() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        }
        testSuites = 0;
        tests = 0;
    }
    else if (functionToTest == "checkForLoss") {
        for (let i=0; i<numOfTests; i++) {
            tests++;
            var t0 = performance.now()
            var s0 = t0 / 1000;
            checkForLoss();
            var t1 = performance.now()
            var s1 = t1 / 1000;
        }
        if (checkForLoss()) {
            testSuites++;
            console.log("checkForLoss() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Passed! '+testSuites+' total', 'color: green')
            console.log('%cTests: '+tests+' Test/s Passed! '+tests+' total', 'color: green')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for checkForLoss() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        } else {
            testSuites++;
            console.log("checkForLoss() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Failed! '+testSuites+' total', 'color: red')
            console.log('%cTests: '+tests+' Test/s Failed! '+tests+' total', 'color: red')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for checkForLoss() took " + (s1 - s0) + " seconds to execute.")
            console.log("=======================")
        }
        testSuites = 0;
        tests = 0;
    }
    else if (functionToTest == "showDamageLabel") {
        for (let i=0; i<numOfTests; i++) {
            var input = Math.floor(Math.random() * 10) + 1;
            tests++;
            var t0 = performance.now()
            var s0 = t0 / 1000;
            showDamageLabel(input);
            var t1 = performance.now()
            var s1 = t1 / 1000;
        }
        if (showDamageLabel(input)) {
            testSuites++;
            console.log("showDamageLabel() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Passed! '+testSuites+' total', 'color: green')
            console.log('%cTests: '+tests+' Test/s Passed! '+tests+' total', 'color: green')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for showDamageLabel() took " + (s1 - s0) + " seconds to execute.")
            console.log("The most recent input parameter for showDamageLabel() was int " + input + ".")
            console.log("=======================")
        } else {
            testSuites++;
            console.log("showDamageLabel() Test")
            console.log('%cTest Suites: '+testSuites+' Test/s Failed! '+testSuites+' total', 'color: red')
            console.log('%cTests: '+tests+' Test/s Failed! '+tests+' total', 'color: red')
            console.log("Snapshots: 0 total")
            console.log("The most recent call for showDamageLabel() took " + (s1 - s0) + " seconds to execute.")
            console.log("The most recent input parameter for showDamageLabel() was int " + input + ".")
            console.log("=======================")
        }
        testSuites = 0;
        tests = 0;
    }
}
