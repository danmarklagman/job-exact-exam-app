import { RouteRecordRaw } from 'vue-router'
import _concat from 'lodash/concat'
import auth from './auth'
import admin from './admin'

const routes: Array<RouteRecordRaw> = _concat(auth, admin)

export default routes
