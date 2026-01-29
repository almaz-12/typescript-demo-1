"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
getFullName('test', 'name');
let getFullNameArrow = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
getFullNameArrow('test', 'name');
//# sourceMappingURL=index.js.map