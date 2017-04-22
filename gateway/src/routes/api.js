import { Router } from 'express'

import {
	UserController,
	HistoryController,
	TimerController,
	CompetitionController,
	TimingGateController,
	WifiController
} from 'src/controllers'

const router = Router()

router.route('/timers')
	.post(TimerController.postTimer)
	.delete(TimerController.deleteTimer)

router.route('/competitions')
	.delete(CompetitionController.deleteCompetition)

router.route('/users')
	.get(UserController.getUsers)
	.post(UserController.postUser)

router.route('/users/:id')
	.get(UserController.getUserById)
	.patch(UserController.patchUserById)
	.delete(UserController.deleteUserById)

router.route('/users/:id/histories')
	.get(HistoryController.getHistoriesByUserId)
	.delete(HistoryController.deleteHistoriesByUserId)

router.route('/histories')
	.get(HistoryController.getHistories)

router.route('/histories/:id')
	.get(HistoryController.getHistoryById)
	.delete(HistoryController.deleteHistoryById)

router.route('/timinggates')
	.get(TimingGateController.getTimingGates)

router.route('/wifi')
	.get(WifiController.getWifi)
	.post(WifiController.postWifi)

export default router
