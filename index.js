/**
 * 100 - 199: Info
 * 200 - 299: Success
 * 300 - 399: Redirect
 * 400 - 499: Client Error
 * 500 - 599: Server Error
 */

function isInfo(code) {
    let result;
    if (code > 99 && code < 200) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

// global variable
code1 = 101;
// old way - var uses function scope
var code1 = 101;
// new ways - let uses block scope
let result = isInfo(code1);
// can't be changed - static type
const x = 7;

// 200 - 299: Success
function isSuccess(code) {
    if (code >= 200 && code <= 299) {
        result = true;
    }
    return result;
}

// 300 - 399: Redirect
function isRedirect(code) {
    if (code >= 300 && code <= 399) {
        return true;
    } else {
        return false;
    }
}

// 400 - 499: Client Error
function isClientError(code) {
    if (code >= 400 && code >= 499) {
        return true;
    }
    return false;
} 

// 500 - 599: Server Error
function isServerError(code) {
    // exp ? true : false    
    // return code >= 500 && code <= 599 ? true : false;
    return code >= 500 && code <= 599;
}

function buidStatusCodeFunction(rangeStart, rangeEnd) {
    return function(code) {
        return code >= rangeStart && code <= rangeEnd;
    };

}

var isServerError = buildStatusCodeFunction(500, 599);
var isClientError = buildStatusCodeFunction(400, 499);
var isRedirect = buildStatusCodeFunction(300, 399);
var isSuccess = buildStatusCodeFunction(200, 299);
var isInfo = buildStatusCodeFunction(100, 199);
isServerError(503);