import angular from 'angular';
import Home from 'home/home';
import UsersFilter from 'users-filter/users-filter';
import UsersTable from 'users-table/users-table';
import UserForm from 'user-form/user-form';

export default angular.module('test.components', [ Home, UserForm, UsersFilter, UsersTable ]).name;
