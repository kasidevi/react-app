import UserService from '../services/UserService/index.api';

import CounterStore from './CounterStore';
import UserStore from './UsersStore';

const counterStore = new CounterStore();
const userService = new UserService();
const usersStore = new UserStore(userService);

export default {
    counterStore,
    usersStore
};
