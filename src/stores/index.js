import UserService from '../services/UserService/index.api';

import CounterStore from './CounterStore';
import UserStore from './UsersStore';
import TodoStoreWithNetworkCalls from './TodoStoreWithNetworkCalls';
import TodoServices from '../services/TodoServices';

const counterStore = new CounterStore();
const userService = new UserService();
const usersStore = new UserStore(userService);

const todoServices = new TodoServices();
const todoStoreWithNetworkCalls = new TodoStoreWithNetworkCalls(todoServices);

export default {
    counterStore,
    usersStore,
    todoStoreWithNetworkCalls
};
