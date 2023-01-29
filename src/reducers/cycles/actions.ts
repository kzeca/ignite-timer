import { ICycle } from './reducer'

export const ActionTypes = {
  ADD_NEW_CYCLE: 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE: 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_COMPLETED: 'MARK_CURRENT_CYCLE_AS_COMPLETED',
} as const

export interface ICycleAction {
  type: keyof typeof ActionTypes
  payload?: any | undefined
}

export function addNewCycleAction(newCycle: ICycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsCompletedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_COMPLETED,
  }
}

export function interrupCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
