"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(userEntity) {
    return `${userEntity.firstName} ${userEntity.lastName}`;
}
const user = {
    firstName: 'test',
    lastName: 'name',
    age: 23,
};
getFullName(user);
//# sourceMappingURL=index.js.map