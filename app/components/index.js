import angular from 'angular';
import Root from 'root/root';
import Home from 'home/home';
import UsersFilter from 'users-filter/users-filter';
import UsersTable from 'users-table/users-table';
import UserForm from 'user-form/user-form';
import Sidebar from 'sidebar/sidebar';

export default angular.module('test.components', [
  Root,
  Home,
  UserForm,
  UsersFilter,
  UsersTable,
  Sidebar
]).name;
