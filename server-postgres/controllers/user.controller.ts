import User, { UserMap } from '../models/user.model';
import database from '../database';
import * as jwt from 'jsonwebtoken';
import BaseCtrl from './base';


class UserCtrl  extends BaseCtrl{
  model = User;

  constructor(){
    super();
    UserMap(database);
  }
}

export default UserCtrl;
