import { ActionTypes, ICycleAction } from './actions'
// import { produce } from 'immer'

export interface ICycle {
  id: number
  task: string
  duration: number
  startDate: Date
  interruptedDate?: Date
  completedDate?: Date
}

interface CyclesState {
  cycles: ICycle[]
  activeCycleId: number | null
}

export function cyclesReducer(state: CyclesState, action: ICycleAction) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }

      /* return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      }) */
    }
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }

      /* const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      }) */
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_COMPLETED: {
      document.title = 'Ignite timer'
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, completedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
      /* const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].completedDate = new Date()
        draft.activeCycleId = null
      }) */
    }

    default:
      return state
  }
}
